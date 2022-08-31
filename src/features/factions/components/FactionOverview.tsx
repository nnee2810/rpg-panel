import { BasicTable } from "components/basic"
import { UserLink } from "components/core"
import { IFaction } from "../interfaces"

interface FactionOverviewProps {
  data: IFaction
}

export default function FactionOverview({ data }: FactionOverviewProps) {
  return (
    <BasicTable>
      <tbody>
        <tr>
          <td>Faction</td>
          <td>{data.Name}</td>
        </tr>
        <tr>
          <td>Leader</td>
          <td>{data?.Leader ? <UserLink data={data?.Leader} /> : "-"}</td>
        </tr>
        <tr>
          <td>Thông báo</td>
          <td>{data.Anunt}</td>
        </tr>
        <tr>
          <td>Tuyển dụng</td>
          <td>{data.App ? "Có" : "Không"}</td>
        </tr>
        <tr>
          <td>Rank 7</td>
          <td>{data.Name7}</td>
        </tr>
        <tr>
          <td>Rank 6</td>
          <td>{data.Name6}</td>
        </tr>
        <tr>
          <td>Rank 5</td>
          <td>{data.Name5}</td>
        </tr>
        <tr>
          <td>Rank 4</td>
          <td>{data.Name4}</td>
        </tr>
        <tr>
          <td>Rank 3</td>
          <td>{data.Name3}</td>
        </tr>
        <tr>
          <td>Rank 2</td>
          <td>{data.Name2}</td>
        </tr>
        <tr>
          <td>Rank 1</td>
          <td>{data.Name1}</td>
        </tr>
      </tbody>
    </BasicTable>
  )
}
