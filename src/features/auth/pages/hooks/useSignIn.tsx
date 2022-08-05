import { yupResolver } from "@hookform/resolvers/yup"
import { requiredMessage } from "features/validateMessage"
import { useForm } from "react-hook-form"
import * as yup from "yup"

interface FieldValues {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().label("Tên nhân vật").required(requiredMessage),
  password: yup.string().label("Mật khẩu").required(requiredMessage),
})

export default function useSignIn() {
  const methods = useForm<FieldValues>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = methods.handleSubmit((values) => {
    console.log(values)
  })

  return { methods, handleSubmit }
}
