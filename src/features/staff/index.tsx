import { Tabs } from "components/basic"
import { PageHeader } from "components/core"
import { TableAdmin, TableHelper, TableLeader } from "./components"

export default function Staff() {
  return (
    <div className="space-y-4">
      <PageHeader>Quản trị viên</PageHeader>
      <Tabs
        tabs={[{ label: "Admin" }, { label: "Helper" }, { label: "Leader" }]}
      >
        <TableAdmin />
        <TableHelper />
        <TableLeader />
      </Tabs>
    </div>
  )
}
