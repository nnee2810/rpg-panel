import { Tag } from "components/basic"
import { useAppSelector } from "hooks"
import { IProfile } from "interfaces"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { userSelector } from "store/reducers/user"

function getNameColor(profile: IProfile | null) {
  if (profile?.Admin || profile?.Helper) return "text-emerald-500"
  return ""
}

export default function Header() {
  const { profile } = useAppSelector(userSelector)

  return (
    <div className="sticky top-0 h-16 px-8 flex justify-between items-center bg-gray-800 z-10">
      <div>Logo</div>
      <div className="flex items-center space-x-2">
        <div>
          <div
            className={`flex justify-end items-center space-x-1 text-xs  ${getNameColor(
              profile
            )}`}
          >
            <div>{profile?.name}</div>
            <div
              className={`relative w-1.5 h-1.5 bg-${
                profile?.Status ? "emerald" : "red"
              }-500 rounded-full`}
            >
              <div
                className={`absolute w-full h-full bg-${
                  profile?.Status ? "emerald" : "red"
                }-500 rounded-full animate-ping`}
              ></div>
            </div>
          </div>
          <div>
            <Tag scheme="primary">
              Level {profile?.Level} ({profile?.Respect} RP) -{" "}
              {profile?.PremiumPoints} xu
            </Tag>
          </div>
        </div>
        <LazyLoadImage
          alt="avatar"
          src={`https://ui-avatars.com/api/?name=${profile?.name}&background=111827&color=fff`}
          className="w-11 h-11 rounded-lg"
        />
      </div>
    </div>
  )
}
