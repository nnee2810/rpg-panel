import { cloneElement, ReactElement } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Collapse, Tooltip } from "../basic"

interface FieldProps {
  name: string
  children: ReactElement
  label?: string
  tip?: string
}

export default function Field({ name, children, label, tip }: FieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="mb-2">
      <div className="flex space-x-1 mb-1">
        <label htmlFor={name} className="text-xs">
          {label}
        </label>
        {tip && (
          <Tooltip content={tip}>
            <div>
              <AiOutlineInfoCircle />
            </div>
          </Tooltip>
        )}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) =>
          cloneElement(children, {
            id: name,
            name,
            value,
            onChange,
            isInvalid: !!errors[name],
            ...children.props,
          })
        }
      />
      <Collapse open={!!errors?.[name]}>
        {errors?.[name] && (
          <div className="text-sm text-red-500">
            {String(errors?.[name]?.message)}
          </div>
        )}
      </Collapse>
    </div>
  )
}
