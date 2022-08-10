import clsx from "clsx"
import { IconBaseProps } from "react-icons"
import { CgSpinner } from "react-icons/cg"

export default function Spin({
  className,
  fontSize = 20,
  ...props
}: IconBaseProps) {
  return (
    <CgSpinner
      {...props}
      fontSize={fontSize}
      className={clsx("mr-2 animate-spin", className)}
    />
  )
}
