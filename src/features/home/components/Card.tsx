import { ReactNode } from "react"

interface CardProps {
  icon: ReactNode
  label: string
  value: ReactNode
}

export default function Card({ icon, label, value }: CardProps) {
  return (
    <div className="p-4 flex justify-between items-center bg-gray-800 rounded-md border-l-4 border-emerald-500">
      <div>
        <div>{label}</div>
        <div className="text-2xl">{value}</div>
      </div>
      <div className="text-4xl text-emerald-500">{icon}</div>
    </div>
  )
}
