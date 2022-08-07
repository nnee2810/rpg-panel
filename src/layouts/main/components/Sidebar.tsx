import { menu } from "configs/constants"
import { AnimatePresence, motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "hooks"
import { BsArrowRight } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom"
import { toggleSidebar, userSelector } from "store/reducers/user"

export default function Sidebar() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { collapsed } = useAppSelector(userSelector)

  return (
    <div
      className={`relative ${
        collapsed ? "w-14" : "w-60"
      } py-4 bg-gray-800/50 transition-all duration-500`}
    >
      {menu.map((item) => (
        <div>
          <div className="px-4 py-3 text-gray-400 text-xs font-bold truncate uppercase">
            {item.name}
          </div>
          {item?.children?.map((subItem) => (
            <Link to={subItem.path || "#"}>
              <div
                className={`flex items-center space-x-2 px-4 py-3 text-md hover:bg-emerald-500 transition ${
                  subItem.path === location.pathname ? "bg-emerald-500" : ""
                }`}
              >
                <div className="text-xl">{subItem.icon}</div>
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
                      transition={{ type: "tween", duration: 0.5 }}
                      className="truncate"
                    >
                      {subItem.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          ))}
        </div>
      ))}
      <div
        className={`absolute top-5 -right-4 p-2 bg-gray-800 text-lg rounded-full transition duration-500 cursor-pointer ${
          collapsed ? "rotate-0" : "rotate-180"
        } hover:bg-gray-700`}
        onClick={() => dispatch(toggleSidebar())}
      >
        <BsArrowRight />
      </div>
    </div>
  )
}
