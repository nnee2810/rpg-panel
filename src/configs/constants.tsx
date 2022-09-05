export enum Message {
  INTERNAL_SERVER_ERROR = "Không thể xử lý yêu cầu, hãy thử lại sau",
}

interface IFaction {
  id: number
  name: string
}

export const factions: IFaction[] = [
  {
    id: 1,
    name: "Los Santos Police Departament",
  },
  {
    id: 2,
    name: "Federal Bureau of Investigations",
  },
  {
    id: 3,
    name: "National Guard",
  },
  {
    id: 4,
    name: "Grove Street",
  },
  {
    id: 5,
    name: "Vietnam Boys",
  },
  {
    id: 6,
    name: "Los Vagos",
  },
  {
    id: 7,
    name: "School Instructors",
  },
  {
    id: 8,
    name: "Tow Truck Company",
  },
  {
    id: 9,
    name: "News Reporters",
  },
  {
    id: 10,
    name: "The Ballas",
  },
  {
    id: 11,
    name: "Hitman Agency",
  },
  {
    id: 12,
    name: "Taxi Company",
  },
  {
    id: 13,
    name: "Paramedic & Fireman",
  },
  {
    id: 14,
    name: "Da Nang Boys",
  },
  {
    id: 15,
    name: "Las Venturas Police Department",
  },
]

interface Job {
  id: number
  name: string
}
export const jobs: Job[] = [
  {
    id: 1,
    name: "Nông dân",
  },
  {
    id: 1,
    name: "Trucker",
  },
  {
    id: 1,
    name: "Chặt gỗ",
  },
  {
    id: 1,
    name: "Car Jacker",
  },
  {
    id: 1,
    name: "Thợ chế súng",
  },
  {
    id: 1,
    name: "Buôn thuốc phiện",
  },
  {
    id: 1,
    name: "Người làm vườn",
  },
  {
    id: 1,
    name: "Thám tử",
  },
  {
    id: 1,
    name: "Pizza boy",
  },
  {
    id: 1,
    name: "Chuyển phát nhanh",
  },
  {
    id: 1,
    name: "Câu cá LS",
  },
  {
    id: 1,
    name: "Phi công",
  },
  {
    id: 1,
    name: "Người kéo hàng",
  },
  {
    id: 1,
    name: "Giao báo",
  },
  {
    id: 1,
    name: "Câu cá LV",
  },
  {
    id: 1,
    name: "Săn hươu",
  },
]

export const vnpResponseMessage = {
  "00": "Giao dịch thành công",
  "07": "Trừ tiền thành công. Giao dịch bị nghi ngờ (liên quan tới lừa đảo, giao dịch bất thường)",
  "09": "Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng",
  "10": "Giao dịch không thành công do: Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần",
  "11": "Giao dịch không thành công do: Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch",
  "12": "	Giao dịch không thành công do: Thẻ/Tài khoản của khách hàng bị khóa",
  "13": "Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch",
  "24": "Giao dịch không thành công do: Khách hàng hủy giao dịch",
  "51": "Giao dịch không thành công do: Tài khoản của quý khách không đủ số dư để thực hiện giao dịch",
  "65": "Giao dịch không thành công do: Tài khoản của Quý khách đã vượt quá hạn mức giao dịch trong ngày",
  "75": "Ngân hàng thanh toán đang bảo trì",
  "79": "Giao dịch không thành công do: KH nhập sai mật khẩu thanh toán quá số lần quy định. Xin quý khách vui lòng thực hiện lại giao dịch",
  "99": "Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)",
}
