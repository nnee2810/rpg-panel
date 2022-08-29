import { PropsWithChildren, ReactNode } from "react"

interface PageHeaderProps {
  actions?: ReactNode
}

export default function PageHeader({
  children,
  actions,
}: PropsWithChildren<PageHeaderProps>) {
  return (
    <div className="flex justify-between items-baseline">
      <div className="text-2xl font-bold">{children}</div>
      {actions}
    </div>
  )
}
