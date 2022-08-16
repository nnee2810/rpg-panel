import { Tab } from "@headlessui/react"
import clsx from "clsx"
import { LayoutGroup, motion } from "framer-motion"
import { Children, Fragment, ReactNode } from "react"

interface TabItem {
  label: string
  icon?: ReactNode
}

interface TabsProps {
  tabs: TabItem[]
  children: ReactNode
}

export default function Tabs({ tabs, children }: TabsProps) {
  return (
    <Tab.Group>
      <LayoutGroup>
        <Tab.List className="flex bg-gray-800 rounded-md">
          {tabs.map((tab) => (
            <Tab as={Fragment} key={tab.label}>
              {({ selected }) => (
                <div
                  className={clsx(
                    "relative flex-1 h-11 text-center cursor-pointer transition"
                  )}
                >
                  {selected && (
                    <motion.div
                      layoutId="tabs"
                      className="absolute top-0 left-0 w-full h-full bg-emerald-500 shadow-xl shadow-emerald-500/50 rounded-md z-0"
                    />
                  )}
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center space-x-1 z-10">
                    <div className="text-xl">{tab.icon}</div>
                    <div>{tab.label}</div>
                  </div>
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </LayoutGroup>
      <Tab.Panels className="mt-4">
        {Children.toArray(children).map((item, idx) => (
          <Tab.Panel key={idx}>{item}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
