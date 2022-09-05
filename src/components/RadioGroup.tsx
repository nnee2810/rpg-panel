import { RadioGroup as R } from "@headlessui/react"
import clsx from "clsx"
import { ReactNode } from "react"
import { BsCheckCircleFill } from "react-icons/bs"

export interface RadioOption {
  label: ReactNode
  value: unknown
  description?: string
}

interface RadioGroupProps {
  options: RadioOption[]
  value?: string
  onChange?(value: unknown): void
}

export default function RadioGroup({
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <R
      value={value}
      onChange={(newValue) => {
        if (onChange) onChange(newValue)
      }}
    >
      <div className="space-y-2">
        {options.map((option, idx) => (
          <R.Option
            value={option.value}
            className={({ checked }) =>
              clsx(
                "relative flex-1 px-4 py-3 bg-gray-800 border-2 rounded-lg cursor-pointer outline-none",
                checked ? "border-emerald-500" : "border-transparent"
              )
            }
            key={idx}
          >
            {({ checked }) => (
              <>
                <div className="font-medium">{option.label}</div>
                {option?.description && (
                  <div className="text-sm text-gray-200">
                    {option.description}
                  </div>
                )}
                {checked && (
                  <div className="absolute -top-1.5 -right-1 text-xl text-emerald-500">
                    <BsCheckCircleFill />
                  </div>
                )}
              </>
            )}
          </R.Option>
        ))}
      </div>
    </R>
  )
}
