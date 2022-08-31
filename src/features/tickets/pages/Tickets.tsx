import { Button, Pagination, Table } from "components/basic"
import { PageHeader } from "components/core"
import { useAppSelector, useBoolean } from "hooks"
import { useCallback, useState } from "react"
import { userSelector } from "store/reducers/user"
import { ModalCreateTicket, SearchTickets } from "../components"
import { GetTicketsDto } from "../dto"
import { useTableTickets } from "../hooks"

export default function Tickets() {
  const { profile } = useAppSelector(userSelector)
  const [query, setQuery] = useState<GetTicketsDto>({})
  const { getHeaderGroups, getRowModel, data, isLoading } =
    useTableTickets(query)
  const [openCreate, setOpenCreate] = useBoolean()

  const updateQuery = useCallback(
    (values: GetTicketsDto) => {
      setQuery({
        ...query,
        page: 1,
        ...values,
      })
    },
    [setQuery, query]
  )

  return (
    <div className="space-y-4">
      <PageHeader>Hỗ trợ</PageHeader>
      <div className="flex justify-between">
        {profile?.Admin ? (
          <div />
        ) : (
          <Button scheme="primary" onClick={setOpenCreate.on}>
            + Tạo phiếu
          </Button>
        )}
        <SearchTickets updateQuery={updateQuery} />
      </div>
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
      <ModalCreateTicket
        title="Tạo phiếu"
        open={openCreate}
        onClose={setOpenCreate.off}
      />
    </div>
  )
}
