import { BasicTable } from "components/basic"
import { UserLink } from "components/core"
import { IClan } from "../interfaces"

interface ClanOverviewProps {
  data: IClan
}

export default function ClanOverview({ data }: ClanOverviewProps) {
  return (
    <BasicTable>
      <tbody>
        <tr>
          <td>Clan</td>
          <td>{data.Name}</td>
        </tr>
        <tr>
          <td>Tag</td>
          <td style={{ color: `#${data.Color}` }}>{data.Tag}</td>
        </tr>
        <tr>
          <td>Chủ clan</td>
          <td>
            <UserLink data={data.Owner} />
          </td>
        </tr>
        <tr>
          <td>Thông báo</td>
          <td>{data.Motd}</td>
        </tr>
        <tr>
          <td>Rank 6</td>
          <td>{data.RankName6}</td>
        </tr>
        <tr>
          <td>Rank 5</td>
          <td>{data.RankName5}</td>
        </tr>
        <tr>
          <td>Rank 4</td>
          <td>{data.RankName4}</td>
        </tr>
        <tr>
          <td>Rank 3</td>
          <td>{data.RankName3}</td>
        </tr>
        <tr>
          <td>Rank 2</td>
          <td>{data.RankName2}</td>
        </tr>
        <tr>
          <td>Rank 1</td>
          <td>{data.RankName1}</td>
        </tr>
        <tr>
          <td>Ngày thành lập</td>
          <td>{data.RegisterDate}</td>
        </tr>
      </tbody>
    </BasicTable>
  )
}
