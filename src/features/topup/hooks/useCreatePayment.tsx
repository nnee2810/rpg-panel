import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { API } from "configs/api"
import { getAxiosMessageError, invalidMessage, requiredMessage } from "helpers"
import { useBoolean } from "hooks"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as yup from "yup"
import { CreatePaymentDto } from "../dto"

const schema = yup.object().shape({
  amount: yup
    .number()
    .label("Gói nạp")
    .required(requiredMessage)
    .min(1, invalidMessage),
})

export default function useCreatePayment() {
  const methods = useForm<CreatePaymentDto>({
    resolver: yupResolver(schema),
  })
  const { mutateAsync, isLoading } = useMutation(
    async (data: CreatePaymentDto) =>
      (await API.post<string>("/topup/create-payment", data)).data
  )
  const [isProcessing, setIsProcessing] = useBoolean()

  const handleSubmit = methods.handleSubmit(async (data: CreatePaymentDto) => {
    setIsProcessing.on()
    await toast.promise(mutateAsync(data), {
      loading: "Đang tạo giao dịch...",
      success: (url) => {
        setIsProcessing.on()
        window.open(url, "_self")
        return "Đang chuyển hướng"
      },
      error: (error) => {
        setIsProcessing.off()
        return getAxiosMessageError(error)
      },
    })
  })

  return {
    methods,
    handleSubmit,
    isLoading: isLoading || isProcessing,
  }
}
