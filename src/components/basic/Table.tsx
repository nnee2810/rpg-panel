import { flexRender, HeaderGroup, RowModel } from "@tanstack/react-table"
import styled from "styled-components"

const TableWrapper = styled.div`
  table {
    width: 100%;
    border-radius: 6px;
    background-color: rgb(31, 41, 55);
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
    border-top: 1px solid rgba(55, 65, 81, 0.75);
  }
  th:not(th:last-child),
  td:not(td:last-child) {
    border-right: 1px solid rgb(55, 65, 81, 0.75);
  }
`

interface TableProps<T> {
  headerGroup: HeaderGroup<T>[]
  rowModel: RowModel<T>
}

export default function Table<T>({ headerGroup, rowModel }: TableProps<T>) {
  return (
    <TableWrapper>
      <table>
        <thead>
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
        <tbody>
          {rowModel.rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}
