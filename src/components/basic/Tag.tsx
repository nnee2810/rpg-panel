import { HTMLAttributes } from "react"

const tagScheme = {
  primary: "bg-emerald-500",
  gray: "bg-gray-600",
}
type TagScheme = keyof typeof tagScheme

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  scheme?: TagScheme
}

export default function Tag({
  className,
  children,
  scheme = "gray",
  ...props
}: TagProps) {
  return (
    <div
      className={[
        "w-10 min-w-max inline-block px-3 py-1 text-xs text-center rounded-md",
        className,
        tagScheme[scheme],
      ].join(" ")}
    >
      {children}
    </div>
  )
}
