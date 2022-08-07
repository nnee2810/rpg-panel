import { yupResolver } from "@hookform/resolvers/yup"
import { useMutation } from "@tanstack/react-query"
import { API } from "configs/api"
import { requiredMessage } from "helpers/validateMessage"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { setToken } from "utils/token"
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
  const { mutate, isLoading } = useMutation(
    async (data: SignInDto) =>
      (await API.post<string>("/auth/sign-in", data)).data
  )

  const handleSubmit = methods.handleSubmit((values) => {
    mutate(values, {
      onSuccess(data) {
        setToken(data)
        navigate("/")
      },
    })
  })

  return { methods, handleSubmit, isLoading }
}
