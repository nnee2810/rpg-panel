import { AnimatePresence, motion } from "framer-motion"
import { PropsWithChildren } from "react"

interface CollapseProps extends PropsWithChildren {
  open?: boolean
}

export default function Collapse({ open, children }: CollapseProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          initial="hide"
          animate="show"
          exit="hide"
          variants={{
            show: { opacity: 1, height: "auto" },
            hide: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
