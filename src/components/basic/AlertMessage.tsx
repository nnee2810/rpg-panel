import { PropsWithChildren } from "react"

export default function AlertMessage({ children }: PropsWithChildren) {
  return (
    <div className="p-2 bg-gray-600  border-l-4 border-emerald-500 rounded-md">
      {children}
    </div>
  )
}
