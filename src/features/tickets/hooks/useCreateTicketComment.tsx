import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API } from "configs/api"
import { maxLengthMessage, requiredMessage } from "helpers"
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
  const methods = useForm<FormValues>({
    defaultValues: {
      content: "",
    },
    resolver: yupResolver(schema),
  })
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation((content: string) =>
    API.post(`/tickets/${id}/comments`, { content })
  )

  const handleSubmit = methods.handleSubmit(({ content }) => {
    mutate(content, {
      onSuccess() {
        toast.success("Phản hồi đã được gửi")
        methods.reset()
        queryClient.invalidateQueries(["get-ticket-comments"])
      },
    })
  })

  return { methods, handleSubmit, isLoading }
}
