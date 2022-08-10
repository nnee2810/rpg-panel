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
        tabs={["Top level", "Top giàu có", "Top giờ chơi", "Top nạp lần đầu"]}
      >
        <TableTopLevel />
        <TableTopRich />
        <TableTopConnectedTime />
        <div></div>
      </Tabs>
    </div>
  )
}
