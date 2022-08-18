import clsx from "clsx"
import { PropsWithChildren } from "react"

const alertMessageScheme = {
  success: "border-emerald-500",
  error: "border-red-500",
}

interface AlertMessageProps extends PropsWithChildren {
  scheme?: keyof typeof alertMessageScheme
}

export default function AlertMessage({
  scheme = "success",
  children,
}: AlertMessageProps) {
  return (
    <div
      className={clsx(
        "p-2.5 bg-gray-700 border-l-4 rounded-md",
        alertMessageScheme[scheme]
      )}
    >
      {children}
    </div>
  )
}
