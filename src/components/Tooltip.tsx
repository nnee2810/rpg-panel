import Tippy, { TippyProps } from "@tippyjs/react"

export default function Tooltip({ children, ...props }: TippyProps) {
  return <Tippy {...props}>{children}</Tippy>
}
