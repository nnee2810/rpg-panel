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
  BsShield,
  BsShieldCheck,
} from "react-icons/bs"
import { IoTicketOutline } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
import { toggleSidebar, userSelector } from "store/reducers/user"

export default function Sidebar() {
  const dispatch = useAppDispatch()
  const { profile, collapsed } = useAppSelector(userSelector)

  return (
    <LayoutGroup>
      <div
        className={clsx(
          "relative py-4 bg-gray-800/50 transition-all duration-500",
          collapsed ? "w-14" : "w-60"
        )}
      >
        {(!!profile?.Admin || !!profile?.Leader) && (
          <Section name="Quản lý">
            {profile?.Admin === 7 && (
              <SectionItem
                path="/manage/admin"
                name="Admin"
                icon={<BsShieldCheck />}
              />
            )}
            {!!profile?.Leader && (
              <SectionItem
                path="/manage/leader"
                name="Leader"
                icon={<BsShield />}
              />
            )}
          </Section>
        )}
        <Section name="Điều hướng chính">
          <SectionItem path="/" name="Trang chính" icon={<AiOutlineHome />} />
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
          <SectionItem
            path="/donate"
            name="Nạp lần đầu"
            icon={<BsCashCoin />}
          />
          <SectionItem
            path="/denounces"
            name="Tố cáo"
            icon={<AiOutlineAudit />}
          />
          <SectionItem
            path="/supports"
            name="Hỗ trợ"
            icon={<IoTicketOutline />}
          />
          <SectionItem
            path="/bans"
            name="Cấm chơi"
            icon={<AiOutlineUserDelete />}
          />
        </Section>
        <div
          className={clsx(
            "absolute top-5 -right-4 p-2 bg-gray-800 text-lg rounded-full transition duration-500 cursor-pointer hover:bg-gray-700",
            { "rotate-180": !collapsed }
          )}
          onClick={() => dispatch(toggleSidebar())}
        >
          <BsArrowRight />
        </div>
      </div>
    </LayoutGroup>
  )
}

interface SectionProps {
  name: string
  children: ReactNode
}
function Section({ name, children }: SectionProps) {
  return (
    <div>
      <div className="px-4 py-3 text-gray-400 text-xs font-bold truncate uppercase">
        {name}
      </div>
      {children}
    </div>
  )
}

interface SectionItemProps {
  path: string
  name: string
  icon: ReactNode
}
function SectionItem({ icon, name, path }: SectionItemProps) {
  const location = useLocation()
  const { collapsed } = useAppSelector(userSelector)

  return (
    <Link to={path}>
      <div
        className={clsx(
          "relative h-12 px-4 flex items-center text-md hover:bg-gray-700 transition",
          { "bg-gradient-to-l from-emerald-500": path === location.pathname }
        )}
      >
        {path === location.pathname && (
          <motion.div
            layoutId="sidebar"
            className="absolute left-0 w-1 h-full bg-emerald-500"
          />
        )}
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
    </Link>
  )
}
