import clsx from "clsx"
import { HTMLAttributes } from "react"

const tagScheme = {
  primary: "bg-emerald-500",
  gray: "bg-gray-600",
  red: "bg-red-600",
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
      {...props}
      className={clsx(
        "w-8 min-w-max inline-block px-2 py-0.5 text-sm font-medium text-center rounded-md",
        tagScheme[scheme],
        className
      )}
    >
      {children}
    </div>
  )
}
