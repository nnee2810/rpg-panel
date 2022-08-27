import { PageHeader } from "components/core"
import { TableOnline } from "./components"

export default function Online() {
  return (
    <div className="space-y-4">
      <PageHeader>Đang chơi</PageHeader>
      <TableOnline />
    </div>
  )
}
