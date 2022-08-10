import { Tabs } from "components/basic"
import { PageTitle } from "components/core"
import { TableAdmin, TableHelper, TableLeader } from "./components"

export default function Staff() {
  return (
    <div>
      <PageTitle>Quản trị viên</PageTitle>
      <Tabs tabs={["Admin", "Helper", "Leader"]}>
        <TableAdmin />
        <TableHelper />
        <TableLeader />
      </Tabs>
    </div>
  )
}
