import { Pagination, Table } from "components/basic"
import { useTableFactionMembers } from "../hooks"

interface TableFactionMembersProps {
  id: string
}

export default function TableFactionMembers({ id }: TableFactionMembersProps) {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableFactionMembers(id)

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
          onPageChange={handleChangePage}
        />
      )}
    </div>
  )
}
