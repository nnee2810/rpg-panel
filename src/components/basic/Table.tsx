import { flexRender, HeaderGroup, RowModel } from "@tanstack/react-table"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"
import Empty from "./Empty"
import Spin from "./Spin"

interface TableProps<T> {
  headerGroup: HeaderGroup<T>[]
  rowModel: RowModel<T>
  isLoading?: boolean
}

export default function Table<T>({
  headerGroup,
  rowModel,
  isLoading,
}: TableProps<T>) {
  return (
    <div className="relative">
      <table className="w-full bg-gray-800 rounded-md">
        <thead>
          {headerGroup.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="p-4 border-b border-gray-700/50" key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {rowModel.rows.length
            ? rowModel.rows.map((row, idx) => (
                <tr
                  className={clsx({ "bg-gray-700/20": idx % 2 })}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="p-4" key={cell.id}>
                      <div className="flex justify-center items-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            : !isLoading && (
                <tr>
                  <td colSpan={headerGroup[0].headers.length}>
                    <Empty />
                  </td>
                </tr>
              )}
        </tbody>
      </table>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={{
              show: { opacity: 1 },
              hide: { opacity: 0 },
            }}
            className="absolute top-0 w-full h-full flex justify-center items-center bg-gray-800/75"
          >
            <Spin className="text-4xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
