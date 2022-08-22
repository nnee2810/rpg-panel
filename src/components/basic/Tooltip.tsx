import Tippy, { TippyProps } from "@tippyjs/react"

export default function Tooltip({ children, content }: TippyProps) {
  return <Tippy content={content}>{children}</Tippy>
}
