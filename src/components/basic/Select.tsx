import { Listbox, Transition } from "@headlessui/react"
import clsx from "clsx"
import { Fragment } from "react"
import { BiCheck, BiChevronDown } from "react-icons/bi"
import SimpleBar from "simplebar-react"
import Empty from "./Empty"

export interface SelectOption {
  label: string
  value: unknown
}

interface SelectProps {
  options: SelectOption[]
  value?: string
  isInvalid?: boolean
  onChange?(value: unknown): void
}

export default function Select({
  options,
  value,
  isInvalid,
  onChange,
}: SelectProps) {
  return (
    <div>
      <Listbox value={value} onChange={onChange!}>
        <div className="relative">
          <div className="absolute inset-y-0 -left-0.5 flex items-center">
            <div
              className={clsx(
                "w-1 h-7 rounded transition z-10",
                isInvalid ? "bg-red-500" : "bg-emerald-500"
              )}
            ></div>
          </div>
          <Listbox.Button
            className="relative w-full h-11 px-4 text-left bg-gray-600 hover:bg-gray-500 focus:bg-gray-500 
              rounded-md outline-0 shadow-xl hover:shadow-gray-500/50 focus:shadow-gray-500/50 transition duration-300"
          >
            <div className="truncate">
              {options.find((option) => option.value === value)?.label ||
                "Chọn..."}
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <BiChevronDown />
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Listbox.Options className="absolute w-full max-h-60 mt-1 py-1 bg-gray-600 rounded-md outline-none shadow-xl cursor-pointer z-10">
              <SimpleBar className="max-h-60">
                {options.length ? (
                  options.map((option) => (
                    <Listbox.Option
                      value={option.value}
                      className={({ active }) =>
                        clsx("relative px-8 py-2 hover:bg-emerald-500", {
                          "bg-emerald-500": active,
                        })
                      }
                      key={option.label}
                    >
                      {({ selected }) => (
                        <>
                          {selected && (
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                              <BiCheck />
                            </div>
                          )}
                          <div
                            className={clsx("truncate", {
                              "font-semibold": selected,
                            })}
                          >
                            {option.label}
                          </div>
                        </>
                      )}
                    </Listbox.Option>
                  ))
                ) : (
                  <Empty />
                )}
              </SimpleBar>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
