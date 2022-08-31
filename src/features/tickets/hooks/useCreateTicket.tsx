import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API } from "configs/api"
import {
  getAxiosMessageError,
  invalidMessage,
  maxLengthMessage,
  requiredMessage,
} from "helpers"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"
import { CreateTicketDto } from "../dto"
import { TicketCategory } from "../interfaces"

interface UseCreateTicketProps {
  onClose(): void
}

const schema = yup.object().shape({
  category: yup
    .string()
    .label("Phân loại")
    .required(requiredMessage)
    .oneOf(Object.keys(TicketCategory), invalidMessage),
  title: yup
    .string()
    .label("Tiêu đề")
    .required(requiredMessage)
    .max(50, maxLengthMessage),
  description: yup
    .string()
    .label("Mô tả")
    .required(requiredMessage)
    .max(300, maxLengthMessage),
})

export default function useCreateTicket({ onClose }: UseCreateTicketProps) {
  const methods = useForm<CreateTicketDto>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(schema),
  })
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation((data: CreateTicketDto) =>
    API.post("/tickets", data)
  )

  const handleSubmit = methods.handleSubmit((data: CreateTicketDto) => {
    if (isLoading) return
    toast.promise(mutateAsync(data), {
      loading: "Đang tạo phiếu...",
      success() {
        onClose()
        methods.reset()
        queryClient.invalidateQueries(["get-tickets"])
        return "Đã tạo phiếu"
      },
      error: (error) => getAxiosMessageError(error),
    })
  })

  return {
    methods,
    handleSubmit,
    isLoading,
  }
}
