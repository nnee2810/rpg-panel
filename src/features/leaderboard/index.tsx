import { PageHeader, Tabs } from "components"
import {
  TableTopConnectedTime,
  TableTopLevel,
  TableTopRich,
} from "./components"

export default function Leaderboard() {
  return (
    <div className="space-y-4">
      <PageHeader>Bảng xếp hạng</PageHeader>
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
