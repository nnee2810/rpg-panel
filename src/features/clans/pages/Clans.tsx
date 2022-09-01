import { PageHeader, Pagination, Table } from "components"
import { useTableClans } from "../hooks"

export default function Clans() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableClans()

  return (
    <div className="space-y-4">
      <PageHeader>Clan</PageHeader>
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
