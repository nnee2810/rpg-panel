import { PageHeader, Pagination, Table } from "components"
import { useState } from "react"
import { SearchTxnLogs } from "../components"
import { GetTxnLogsDto } from "../dto"
import { useGetTxnLogs, useTableTxnLogs } from "../hooks"

export default function TxnLogs() {
  const [query, setQuery] = useState<GetTxnLogsDto>({})
  const { data, isLoading, isFetching } = useGetTxnLogs(query)
  const { headerGroup, rowModel } = useTableTxnLogs(data?.data || [])

  const updateQuery = (values: GetTxnLogsDto) => {
    setQuery({
      ...query,
      ...values,
    })
  }

  return (
    <div className="space-y-4">
      <PageHeader>Lịch sử giao dịch</PageHeader>
      <SearchTxnLogs updateQuery={updateQuery} />
      <Table
        headerGroup={headerGroup}
        rowModel={rowModel}
        isLoading={isLoading || isFetching}
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
