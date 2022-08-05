import { cloneElement, ReactElement } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { Collapse } from "."

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
      <div>
        <label htmlFor={name} className="text-xs">
          {label}{" "}
        </label>
        {tip && (
          <span data-tip={tip}>
            <AiOutlineInfoCircle className="inline" />
          </span>
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
          <div className="mt-1 text-red-500 text-sm">
            {String(errors?.[name]?.message)}
          </div>
        )}
      </Collapse>
    </div>
  )
}
