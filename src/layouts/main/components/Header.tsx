import clsx from "clsx"
import { Menu, Ping, Tag } from "components/basic"
import { IProfile } from "features/users/interfaces"
import { useAppDispatch, useAppSelector } from "hooks"
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"
import { signOut, userSelector } from "store/reducers/user"

function getNameColor(profile: IProfile | null) {
  if (profile?.Admin || profile?.Helper) return "text-emerald-500"
  return ""
}

export default function Header() {
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector(userSelector)

  return (
    <div className="sticky top-0 h-16 px-8 flex justify-between items-center bg-gray-800 z-10">
      <Link to="/">Logo</Link>
      <div className="flex items-center space-x-2">
        <div>
          <div
            className={clsx(
              "flex justify-end items-center space-x-1 text-sm",
              getNameColor(profile)
            )}
          >
            <div>{profile?.name}</div>
            <Ping online={!!profile?.Status} />
          </div>
          <div>
            <Tag scheme="primary">
              Level {profile?.Level} ({profile?.Respect} RP) -{" "}
              {profile?.PremiumPoints} xu
            </Tag>
          </div>
        </div>
        <Menu
          button={
            <LazyLoadImage
              alt="avatar"
              src={`https://ui-avatars.com/api/?name=${profile?.name}&background=111827&color=fff`}
              className="w-11 h-11 rounded-lg"
            />
          }
        >
          <Link to={`/users/${profile?.name}`}>
            <AiOutlineUser className="text-xl" />
            <div>Hồ sơ</div>
          </Link>
          <div onClick={() => dispatch(signOut())}>
            <AiOutlineLogout className="text-xl" />
            <div>Đăng xuất</div>
          </div>
        </Menu>
      </div>
    </div>
  )
}
