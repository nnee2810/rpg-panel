import { Switch as S } from "@headlessui/react"
import clsx from "clsx"
import { useBoolean } from "hooks"
import { PropsWithChildren } from "react"

export default function Switch({ children }: PropsWithChildren) {
  const [checked, setChecked] = useBoolean()

  return (
    <div className="flex item-center space-x-1.5">
      <S
        checked={checked}
        onChange={setChecked.toggle}
        className={clsx(
          "relative flex w-10 h-6 border-2 border-transparent rounded-full transition duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
          checked ? "bg-emerald-500" : "bg-gray-500"
        )}
      >
        <div
          className={clsx(
            "w-5 h-5 rounded-full bg-white transition duration-200",
            { "translate-x-4": checked }
          )}
        />
      </S>
      <div className="font-medium">{children}</div>
    </div>
  )
}
