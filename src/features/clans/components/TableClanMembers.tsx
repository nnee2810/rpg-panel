import { Pagination, Table } from "components/basic"
import useTableClanMembers from "../hooks/useTableClanMembers"

interface TableClanMembersProps {
  id: string
}

export default function TableClanMembers({ id }: TableClanMembersProps) {
  const { getHeaderGroups, getRowModel, data, isLoading, updateQuery } =
    useTableClanMembers(id)

  return (
    <div>
      <Table
        headerGroup={getHeaderGroups()}
        rowModel={getRowModel()}
        isLoading={isLoading}
      />
      {data && (
        <Pagination
          currentPage={data.page}
          totalPage={Math.ceil(data.total / data.take)}
          onPageChange={(page) => updateQuery({ page })}
        />
      )}
    </div>
  )
}
