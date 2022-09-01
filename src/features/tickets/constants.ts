import { SelectOption } from "components/Select"
import { TicketCategory, TicketStatus } from "./interfaces"

export const ticketCategoryOptions: SelectOption[] = [
  {
    label: "Tất cả",
    value: TicketCategory.ALL,
  },
  {
    label: "Chung",
    value: TicketCategory.GENERAL,
  },
  {
    label: "Tài khoản",
    value: TicketCategory.ACCOUNT,
  },
  {
    label: "Nạp tiền",
    value: TicketCategory.DONATE,
  },
  {
    label: "Lỗi game",
    value: TicketCategory.BUG,
  },
]

export const ticketStatusOptions: SelectOption[] = [
  {
    label: "Tất cả",
    value: TicketStatus.ALL,
  },
  {
    label: "Đang mở",
    value: TicketStatus.OPEN,
  },
  {
    label: "Đã đóng",
    value: TicketStatus.CLOSE,
  },
]

export const ticketAssignToOptions: SelectOption[] = [
  {
    label: "Tất cả",
    value: 0,
  },
  { label: "Chỉ mình tôi", value: 1 },
]
