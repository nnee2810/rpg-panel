import { BasicTable, Tag } from "components/basic"
import { factions, jobs } from "configs/constants"
import { formatConnectedTime } from "utils/format"
import { IUser } from "../interfaces"

interface ProfileOverviewProps {
  data: IUser
}

export default function ProfileOverview({ data }: ProfileOverviewProps) {
  return (
    <BasicTable className="w-full">
      <tbody>
        <tr>
          <td>Tên</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>Cảnh cáo</td>
          <td>{data.Warns}/3</td>
        </tr>
        <tr>
          <td>Tài khoản</td>
          <td className="space-x-1">
            {!!data.Vip && <Tag scheme="red">VIP</Tag>}
            {!!data.Premium && <Tag scheme="primary">Premium</Tag>}
            {!data.Vip && !data.Premium && "-"}
          </td>
        </tr>
        <tr>
          <td>Level</td>
          <td>
            {data.Level} ({data.Respect} RP)
          </td>
        </tr>
        <tr>
          <td>Faction</td>
          <td>
            {data.Member
              ? `${factions[data.Member - 1].name} (rank ${data.Rank})`
              : "-"}
          </td>
        </tr>
        <tr>
          <td>Faction punish</td>
          <td>{data.FPunish}/20</td>
        </tr>
        <tr>
          <td>Clan</td>
          <td style={{ color: `#${data?.clan?.Color}` }}>
            {data.Clan ? `${data.clan.Name} (rank ${data.ClanRank})` : "-"}
          </td>
        </tr>
        <tr>
          <td>Công việc</td>
          <td>{data.Job ? jobs[data.Job - 1].name : "-"}</td>
        </tr>
        <tr>
          <td>Số điện thoại</td>
          <td>{data.PhoneNr ? data.PhoneNr : "-"}</td>
        </tr>
        <tr>
          <td>Thời gian chơi</td>
          <td>{formatConnectedTime(data.ConnectedTime)}</td>
        </tr>
        <tr>
          <td>Đăng nhập lần cuối</td>
          <td>{data.lastOn.replaceAll(".", "/")}</td>
        </tr>
        <tr>
          <td>Ngày tham gia</td>
          <td>{data.RegisterDate}</td>
        </tr>
      </tbody>
    </BasicTable>
  )
}
