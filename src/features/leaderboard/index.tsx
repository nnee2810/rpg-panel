import { Tabs } from "components/basic"
import { PageTitle } from "components/core"
import {
  TableTopConnectedTime,
  TableTopLevel,
  TableTopRich,
} from "./components"

export default function Leaderboard() {
  return (
    <div>
      <PageTitle>Bảng xếp hạng</PageTitle>
      <Tabs
        tabs={[
          { label: "Top level" },
          { label: "Top giàu có" },
          { label: "Top giờ chơi" },
          { label: "Top nạp lần đầu" },
        ]}
      >
        <TableTopLevel />
        <TableTopRich />
        <TableTopConnectedTime />
        <div></div>
      </Tabs>
    </div>
  )
}
