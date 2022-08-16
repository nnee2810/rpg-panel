import { flexRender, HeaderGroup, RowModel } from "@tanstack/react-table"
import { AnimatePresence, motion } from "framer-motion"
import { AiOutlineInfoCircle } from "react-icons/ai"
import styled from "styled-components"
import Spin from "./Spin"

const TableWrapper = styled.div`
  table {
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th:first-child,
  td:first-child {
    text-align: left;
  }
  th:last-child,
  td:last-child {
    text-align: right;
  }
  td {
    border-top: 1px solid rgba(55, 65, 81, 0.5);
  }
  th:not(th:last-child),
  td:not(td:last-child) {
    border-right: 1px solid rgb(55, 65, 81, 0.5);
  }
`

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
    <TableWrapper className="relative">
      <table>
        <thead className="bg-gray-700/75">
          {headerGroup.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
        <tbody className="bg-gray-800">
          {rowModel.rows.length
            ? rowModel.rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            : !isLoading && (
                <tr>
                  <td colSpan={headerGroup[0].headers.length} className="h-40">
                    <div className="flex flex-col items-center">
                      <AiOutlineInfoCircle className="text-3xl" />
                      <div className="text-center">Không có dữ liệu</div>
                    </div>
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
    </TableWrapper>
  )
}
