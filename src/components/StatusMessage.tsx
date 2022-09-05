import { ReactNode } from "react"

interface StatusMessageProps {
  icon: ReactNode
  description: string
}

export default function StatusMessage({
  icon,
  description,
}: StatusMessageProps) {
  return (
    <div className="py-4 flex flex-col items-center space-y-1">
      <div className="text-3xl">{icon}</div>
      <div>{description}</div>
    </div>
  )
}
