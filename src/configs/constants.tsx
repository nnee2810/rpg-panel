import { MenuItem } from "interfaces"
import {
  AiOutlineAppstore,
  AiOutlineCloseCircle,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineStar,
  AiOutlineUser,
} from "react-icons/ai"
import { BsCashCoin, BsPeople, BsShield, BsShieldCheck } from "react-icons/bs"
import { IoTicketOutline } from "react-icons/io5"

export enum Message {
  INTERNAL_SERVER_ERROR = "Không thể xử lý yêu cầu, vui lòng thử lại sau",
}

export const menu: MenuItem[] = [
  {
    name: "Quản lý",
    children: [
      { name: "Admin", path: "/manage/admin", icon: <BsShieldCheck /> },
      { name: "Leader", path: "/manage/leader", icon: <BsShield /> },
    ],
  },
  {
    name: "Điều hướng chính",
    children: [
      { name: "Trang chính", path: "/", icon: <AiOutlineHome /> },
      { name: "Bảng xếp hạng", path: "/leaderboard", icon: <AiOutlineStar /> },
      { name: "Đang chơi", path: "/online", icon: <AiOutlineUser /> },
      { name: "Quản trị viên", path: "/staffs", icon: <BsShieldCheck /> },
      { name: "Faction", path: "/factions", icon: <AiOutlineAppstore /> },
      { name: "Clan", path: "/clans", icon: <BsPeople /> },
      { name: "Cửa hàng", path: "/shop", icon: <AiOutlineShop /> },
      { name: "Nạp lần đầu", path: "donate", icon: <BsCashCoin /> },
      { name: "Tố cáo", path: "/denounce", icon: <AiOutlineFileText /> },
      { name: "Hỗ trợ", path: "/support", icon: <IoTicketOutline /> },
      { name: "Đăng xuất", path: "/ban", icon: <AiOutlineCloseCircle /> },
    ],
  },
]
