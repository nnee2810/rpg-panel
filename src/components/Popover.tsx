import { Popover as P, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment, PropsWithChildren, ReactNode } from "react"

interface PopoverProps {
  button: ReactNode
  position?: "left" | "right"
}

export default function Popover({
  button,
  position = "right",
  children,
}: PropsWithChildren<PopoverProps>) {
  return (
    <P className="relative">
      {({ open }) => (
        <>
          <P.Button as="div">{button}</P.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <P.Panel
              className={clsx(
                "absolute mt-2 p-4 bg-gray-700 rounded-lg shadow-xl z-10",
                {
                  "left-0": position === "left",
                  "right-0": position === "right",
                }
              )}
            >
              {children}
            </P.Panel>
          </Transition>
        </>
      )}
    </P>
  )
}
