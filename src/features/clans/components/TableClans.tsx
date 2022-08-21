import { Empty, Pagination, Table } from "components/basic"
import { Loading } from "components/core"
import { useTableClans } from "../hooks"

export default function TableClans() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableClans()

  if (isLoading) return <Loading />

  return data ? (
    <div>
      <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
      <Pagination
        currentPage={data.page}
        totalPage={Math.ceil(data.total / data.take)}
        onPageChange={handleChangePage}
      />
    </div>
  ) : (
    <Empty />
  )
}
