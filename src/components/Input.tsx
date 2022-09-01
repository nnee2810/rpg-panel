import clsx from "clsx"
import { useBoolean } from "hooks"
import { InputHTMLAttributes } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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
        className="w-full px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 
        rounded-md outline-0 shadow-xl hover:shadow-gray-600/50 focus:shadow-gray-600/50 transition duration-300"
      />
      <div className="absolute inset-y-0 -left-0.5 flex items-center">
        <div
          className={clsx(
            "w-1 h-7 rounded transition",
            isInvalid ? "bg-red-500" : "bg-emerald-500"
          )}
        ></div>
      </div>
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
