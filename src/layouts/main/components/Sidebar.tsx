import clsx from "clsx"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "hooks"
import { ReactNode } from "react"
import {
  AiOutlineApartment,
  AiOutlineAudit,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineTrophy,
  AiOutlineUserDelete,
  AiOutlineWifi,
} from "react-icons/ai"
import {
  BsArrowRight,
  BsCashCoin,
  BsPeople,
  BsShieldCheck,
} from "react-icons/bs"
import { IoTicketOutline } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
import SimpleBar from "simplebar-react"
import { toggleSidebar, userSelector } from "store/reducers/user"

export default function Sidebar() {
  const dispatch = useAppDispatch()
  const { collapsed } = useAppSelector(userSelector)

  return (
    <div className="relative bg-gray-800/50">
      <SimpleBar
        className={clsx(
          "h-full transition-all duration-500",
          collapsed ? "w-14" : "w-60"
        )}
      >
        <LayoutGroup>
          <SectionItem
            path="/"
            name="Trang chủ"
            icon={<AiOutlineHome />}
            exact
          />
          <SectionItem
            path="/leaderboard"
            name="Bảng xếp hạng"
            icon={<AiOutlineTrophy />}
          />
          <SectionItem
            path="/online"
            name="Đang chơi"
            icon={<AiOutlineWifi />}
          />
          <SectionItem
            path="/staff"
            name="Quản trị viên"
            icon={<BsShieldCheck />}
          />
          <SectionItem
            path="/factions"
            name="Faction"
            icon={<AiOutlineApartment />}
          />
          <SectionItem path="/clans" name="Clan" icon={<BsPeople />} />
          <SectionItem path="/shop" name="Cửa hàng" icon={<AiOutlineShop />} />
          <SectionItem path="/topup" name="Nạp tiền" icon={<BsCashCoin />} />
          <SectionItem
            path="/complaints"
            name="Kiện cáo"
            icon={<AiOutlineAudit />}
          />
          <SectionItem
            path="/tickets"
            name="Hỗ trợ"
            icon={<IoTicketOutline />}
          />
          <SectionItem
            path="/bans"
            name="Cấm chơi"
            icon={<AiOutlineUserDelete />}
          />
        </LayoutGroup>
      </SimpleBar>
      <div
        className={clsx(
          "absolute top-2 -right-4 p-2 bg-gray-800 text-lg rounded-full transition duration-500 cursor-pointer hover:bg-gray-700 z-10",
          { "rotate-180": !collapsed }
        )}
        onClick={() => dispatch(toggleSidebar())}
      >
        <BsArrowRight />
      </div>
    </div>
  )
}

interface SectionItemProps {
  path: string
  name: string
  icon: ReactNode
  exact?: boolean
}
function SectionItem({ icon, name, path, exact }: SectionItemProps) {
  const location = useLocation()
  const { collapsed } = useAppSelector(userSelector)

  return (
    <Link to={path}>
      <div className="relative h-12 hover:bg-gray-700 transition">
        {(exact
          ? location.pathname === path
          : location.pathname.includes(path)) && (
          <motion.div
            layoutId="sidebar"
            className="absolute left-0 w-full h-full bg-emerald-500 z-0"
          />
        )}
        <div className="absolute w-full h-full px-4 flex items-center">
          <div className="text-xl">{icon}</div>
          <AnimatePresence exitBeforeEnter>
            {!collapsed && (
              <motion.div
                initial="hide"
                animate="show"
                exit="hide"
                variants={{
                  show: { opacity: 1 },
                  hide: { opacity: 0 },
                }}
                className="ml-2 truncate"
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Link>
  )
}
