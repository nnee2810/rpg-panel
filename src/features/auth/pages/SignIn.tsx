import { Button, Input } from "components/basic"
import { Field } from "components/core"
import { FormProvider } from "react-hook-form"
import { useSignIn } from "./hooks"

export default function SignIn() {
  const { methods, handleSubmit } = useSignIn()

  return (
    <div className="relative h-screen flex justify-center items-center bg-auth text-white">
      <div className="w-128 p-6 bg-slate-700/95 rounded-lg">
        <div>
          <div>
            Trang quản lý của <b>SA-MP RPG</b>
          </div>
          <div className="text-3xl font-bold ">
            ĐĂNG NHẬP<span className="animate-ping">_</span>
          </div>
        </div>
        <FormProvider {...methods}>
          <form className="mt-10" onSubmit={handleSubmit}>
            <Field name="username" label="Tên nhân vật">
              <Input autoFocus />
            </Field>
            <Field name="password" label="Mật khẩu">
              <Input type="password" />
            </Field>
            <Button scheme="primary" className="mt-6">
              Đăng nhập
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}
