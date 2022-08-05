import { ButtonHTMLAttributes } from "react"
import { CgSpinner } from "react-icons/cg"

const buttonScheme = {
  primary:
    "bg-emerald-500 hover:bg-emerald-400 focus:bg-emerald-400 shadow-xl hover:shadow-emerald-400/50 focus:shadow-emerald-400/50",
  slate:
    "bg-slate-600 hover:bg-slate-500 focus:bg-slate-500 shadow-xl hover:shadow-slate-500/50 focus:shadow-slate-500/50",
}
type ButtonScheme = keyof typeof buttonScheme
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  scheme?: ButtonScheme
  isLoading?: boolean
}

export default function Button({
  children,
  className,
  scheme = "slate",
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={[
        "w-full h-12 flex justify-center items-center space-x-2 rounded-md outline-0 transition duration-300",
        `${buttonScheme[scheme]} ${isLoading ? "cursor-not-allowed" : ""}`,
        className,
      ].join(" ")}
    >
      {isLoading && <CgSpinner className="text-xl animate-spin" />}
      <div className="font-semibold">{children}</div>
    </button>
  )
}
