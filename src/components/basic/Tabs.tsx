import { Tab } from "@headlessui/react"
import clsx from "clsx"
import { Children, Fragment, ReactNode } from "react"

interface TabsProps {
  tabs: string[]
  children: ReactNode
}

export default function Tabs({ tabs, children }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="relative flex space-x-2">
        {tabs.map((tab) => (
          <Tab as={Fragment} key={tab}>
            {({ selected }) => (
              <button
                className={clsx(
                  "flex-1 p-2.5 text-center rounded-md cursor-pointer transition",
                  {
                    "bg-emerald-500 shadow-xl shadow-emerald-500/50": selected,
                    "bg-gray-800 hover:bg-gray-700": !selected,
                  }
                )}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="mt-4">
        {Children.toArray(children).map((item, idx) => (
          <Tab.Panel key={idx}>{item}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
