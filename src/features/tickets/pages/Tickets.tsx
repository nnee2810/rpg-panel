import { Button, Tabs } from "components/basic"
import { PageHeader } from "components/core"
import { useBoolean } from "hooks"
import { ModalCreateTicket, TicketList } from "../components"

export default function Tickets() {
  const [openCreate, setOpenCreate] = useBoolean()

  return (
    <div className="space-y-4">
      <PageHeader>Hỗ trợ</PageHeader>
      <Button scheme="primary" onClick={setOpenCreate.on}>
        + Tạo phiếu hỗ trợ
      </Button>
      <Tabs
        tabs={[{ label: "Tất cả" }, { label: "Đang mở" }, { label: "Đã đóng" }]}
      >
        <TicketList />
      </Tabs>
      <ModalCreateTicket
        title="Tạo phiếu hỗ trợ"
        open={openCreate}
        onClose={setOpenCreate.off}
      />
    </div>
  )
}
