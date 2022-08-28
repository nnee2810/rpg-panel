import { Menu as M, Transition } from "@headlessui/react"
import clsx from "clsx"
import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react"
import { BiChevronDown } from "react-icons/bi"
import Button from "./Button"

interface MenuProps {
  button: ReactNode
  children: ReactNode
}

export default function Menu({
  button,
  children,
}: PropsWithChildren<MenuProps>) {
  return (
    <M as="div" className="relative">
      <M.Button as="div" className="cursor-pointer">
        {typeof button === "string" ? (
          <Button>
            <div className="flex space-x-2">
              {button}
              <BiChevronDown className="w-5 h-5 ml-2" />
            </div>
          </Button>
        ) : (
          button
        )}
      </M.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <M.Items className="absolute right-0 mt-2 w-56 bg-gray-700 rounded-lg shadow-xl">
          <div className="py-1">
            {Children.toArray(children).map((item, idx) => (
              <M.Item key={idx}>
                {({ active }) =>
                  isValidElement(item) ? (
                    cloneElement(item, {
                      ...item.props,
                      className: clsx(
                        "px-4 py-2 flex items-center space-x-2 transition cursor-pointer z-20",
                        {
                          "bg-emerald-500": active,
                        }
                      ),
                    })
                  ) : (
                    <div></div>
                  )
                }
              </M.Item>
            ))}
          </div>
        </M.Items>
      </Transition>
    </M>
  )
}
