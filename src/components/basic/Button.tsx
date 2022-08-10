import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import { ButtonHTMLAttributes } from "react"
import { Spin } from "."

const buttonScheme = {
  primary:
    "bg-emerald-500 hover:bg-emerald-400 focus:bg-emerald-400 shadow-xl hover:shadow-emerald-400/50 focus:shadow-emerald-400/50",
  gray: "bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 shadow-xl hover:shadow-gray-500/50 focus:shadow-gray-500/50",
}
type ButtonScheme = keyof typeof buttonScheme
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  scheme?: ButtonScheme
  isLoading?: boolean
}

export default function Button({
  children,
  className,
  scheme = "gray",
  isLoading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={clsx(
        "w-full h-11 flex justify-center items-center px-4 rounded-md outline-0 transition duration-300",
        className,
        buttonScheme[scheme],
        { "cursor-not-allowed": isLoading }
      )}
    >
      <AnimatePresence exitBeforeEnter>
        {isLoading && (
          <motion.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={{
              show: { opacity: 1, width: "auto" },
              hide: { opacity: 0, width: 0 },
            }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <Spin />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="font-semibold">{children}</div>
    </button>
  )
}
