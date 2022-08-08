import { PropsWithChildren } from "react"

export default function PageTitle({ children }: PropsWithChildren) {
  return <div className="mb-4 text-2xl font-bold">{children}</div>
}
