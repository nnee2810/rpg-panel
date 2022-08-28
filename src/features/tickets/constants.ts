import { SelectOption } from "components/basic/Select"

export const ticketCategoryOptions: SelectOption[] = [
  {
    label: "Tất cả",
    value: null,
  },
  {
    label: "Chung",
    value: "GENERAL",
  },
  {
    label: "Tài khoản",
    value: "ACCOUNT",
  },
  {
    label: "Nạp tiền",
    value: "DONATE",
  },
  {
    label: "Lỗi game",
    value: "BUG",
  },
]

export const ticketStatusOptions: SelectOption[] = [
  {
    label: "Tất cả",
    value: null,
  },
  {
    label: "Đang mở",
    value: "OPEN",
  },
  {
    label: "Đã đóng",
    value: "CLOSE",
  },
]
