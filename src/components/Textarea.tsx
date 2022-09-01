import clsx from "clsx"
import { TextareaHTMLAttributes } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange?: (...event: any[]) => void
  isInvalid?: boolean
}

export default function Textarea({ isInvalid, ...props }: TextareaProps) {
  return (
    <div className="relative">
      <textarea
        {...props}
        className="w-full px-4 py-2.5 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 
        rounded-md outline-0 shadow-xl hover:shadow-gray-600/50 focus:shadow-gray-600/50 transition duration-300"
        style={{ minHeight: "44px" }}
      />

      <div className="absolute top-2 -left-0.5">
        <div
          className={clsx(
            "w-1 h-7 rounded transition",
            isInvalid ? "bg-red-500" : "bg-emerald-500"
          )}
        ></div>
      </div>
    </div>
  )
}
