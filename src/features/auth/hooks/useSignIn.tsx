import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { API } from "configs/api"
import { getAxiosMessageError, requiredMessage } from "helpers"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import { setToken } from "utils"
import * as yup from "yup"
import { SignInDto } from "../dto"

const schema = yup.object().shape({
  name: yup.string().label("Tên nhân vật").required(requiredMessage),
  password: yup.string().label("Mật khẩu").required(requiredMessage),
})

export default function useSignIn() {
  const navigate = useNavigate()
  const methods = useForm<SignInDto>({
    defaultValues: {
      name: "",
      password: "",
    },
    resolver: yupResolver(schema),
  })
  const { mutateAsync, isLoading } = useMutation(
    async (data: SignInDto) =>
      (await API.post<string>("/auth/sign-in", data)).data
  )

  const handleSubmit = methods.handleSubmit((values) => {
    if (isLoading) return
    toast.promise(mutateAsync(values), {
      loading: "Đang kiểm tra tài khoản...",
      success(token) {
        setToken(token)
        navigate("/")
        return "Đăng nhập thành công"
      },
      error: (error) => getAxiosMessageError(error),
    })
  })

  return { methods, handleSubmit, isLoading }
}
