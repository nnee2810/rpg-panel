import { Pagination, Table } from "components/basic"
import { PageHeader } from "components/core"
import { useTableOnline } from "./hooks"

export default function Online() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableOnline()

  return (
    <div className="space-y-4">
      <PageHeader>Đang chơi</PageHeader>
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
