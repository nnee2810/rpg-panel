import { Pagination, Spin, Table } from "components/basic"
import { useTableAdmin } from "../hooks"

export default function TableAdmin() {
  const { getHeaderGroups, getRowModel, data, isLoading, handleChangePage } =
    useTableAdmin()
  return isLoading ? (
    <div className="flex justify-center">
      <Spin className="text-4xl" />
    </div>
  ) : data ? (
    <div>
      <Table headerGroup={getHeaderGroups()} rowModel={getRowModel()} />
      <Pagination
        currentPage={data.page}
        totalPage={Math.ceil(data.total / data.take)}
        onPageChange={handleChangePage}
      />
    </div>
  ) : (
    <div className="text-center">Không có dữ liệu</div>
  )
}
