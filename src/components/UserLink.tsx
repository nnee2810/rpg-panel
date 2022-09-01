import { IUser } from "features/users/interfaces"
import { Link } from "react-router-dom"

interface UserLinkProps {
  data?: IUser | string
}

export default function UserLink({ data }: UserLinkProps) {
  if (!data) return null
  return typeof data === "string" ? (
    <Link to={`/users/${data}`} className="text-emerald-500">
      {data}
    </Link>
  ) : (
    <Link to={`/users/${data?.name}`} className="text-emerald-500">
      {data?.name}
    </Link>
  )
}
