import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API } from "configs/api"
import {
  getAxiosMessageError,
  maxLengthMessage,
  requiredMessage,
} from "helpers"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"

interface FormValues {
  content: string
}

const schema = yup.object().shape({
  content: yup
    .string()
    .label("Phản hồi")
    .required(requiredMessage)
    .max(300, maxLengthMessage),
})

export default function useCreateTicketComment(id: string) {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation((content: string) =>
    API.post(`/tickets/${id}/comments`, { content })
  )
  const methods = useForm<FormValues>({
    defaultValues: {
      content: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = methods.handleSubmit(({ content }) => {
    if (isLoading) return

    toast.promise(mutateAsync(content), {
      loading: "Đang gửi phản hồi",
      success() {
        methods.reset()
        queryClient.invalidateQueries(["get-ticket-comments"])
        return "Đã gửi phản hồi"
      },
      error: (error) => getAxiosMessageError(error),
    })
  })

  return { methods, handleSubmit, isLoading }
}
