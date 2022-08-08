import clsx from "clsx"
import { useBoolean } from "hooks"
import { InputHTMLAttributes } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (...event: any[]) => void
  isInvalid?: boolean
}

export default function Input({ isInvalid, type, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useBoolean()

  return (
    <div className="relative">
      <input
        {...props}
        type={
          type === "password" ? (showPassword ? "text" : "password") : "text"
        }
        className="w-full h-11 px-4 bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 
        rounded-md outline-0 shadow-xl hover:shadow-gray-500/50 focus:shadow-gray-500/50 transition duration-300"
      />
      <div
        className={clsx(
          "absolute top-1.5 -left-0.5 w-1 h-9 rounded transition",
          isInvalid ? "bg-red-500" : "bg-emerald-500"
        )}
      />
      {type === "password" && (
        <div
          className="absolute right-3.5 bottom-3.5 text-xl cursor-pointer"
          onClick={setShowPassword.toggle}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      )}
    </div>
  )
}
