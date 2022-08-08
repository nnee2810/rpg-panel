import clsx from "clsx"
import { IconBaseProps } from "react-icons"
import { CgSpinner } from "react-icons/cg"

export default function Spin({ className, ...props }: IconBaseProps) {
  return (
    <CgSpinner
      {...props}
      className={clsx("mr-1 text-xl animate-spin", className)}
    />
  )
}
