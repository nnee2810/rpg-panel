import { BasicTable, Tag, UserLink } from "components"
import moment from "moment"
import { ITicket, TicketStatus } from "../interfaces"

interface TicketOverviewProps {
  data: ITicket
}

export default function TicketOverview({ data }: TicketOverviewProps) {
  return (
    <BasicTable>
      <tbody>
        <tr>
          <td>Người tạo</td>
          <td>
            <UserLink data={data.user} />
          </td>
        </tr>
        <tr>
          <td>Người hỗ trợ</td>
          <td>{data.assignTo ? <UserLink data={data.assignTo} /> : "-"}</td>
        </tr>
        <tr>
          <td>Tiêu đề</td>
          <td>{data.title}</td>
        </tr>
        <tr>
          <td>Phân loại</td>
          <td>{data.category}</td>
        </tr>
        <tr>
          <td>Trạng thái</td>
          <td>
            {data.status === TicketStatus.OPEN && (
              <Tag scheme="primary">Đang mở</Tag>
            )}
            {data.status === TicketStatus.CLOSE && (
              <Tag scheme="red">Đã đóng</Tag>
            )}
          </td>
        </tr>
        <tr>
          <td>Mô tả</td>
          <td>{data.description}</td>
        </tr>
        <tr>
          <td>Hoạt động cuối</td>
          <td>{moment(data.updatedAt).format("DD/MM/YYYY HH:mm")}</td>
        </tr>
        <tr>
          <td>Ngày tạo</td>
          <td>{moment(data.createdAt).format("DD/MM/YYYY HH:mm")}</td>
        </tr>
      </tbody>
    </BasicTable>
  )
}
