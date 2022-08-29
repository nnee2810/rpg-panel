import { Ping } from "components/basic"
import { IUser } from "features/users/interfaces"
import { Link } from "react-router-dom"

interface UserLinkProps {
  data: IUser | string
}

export default function UserLink({ data }: UserLinkProps) {
  return (
    <div className="flex items-center space-x-2">
      {typeof data === "string" ? (
        <Link to={`/users/${data}`} className="text-emerald-500">
          {data}
        </Link>
      ) : (
        <>
          {!!data.Status && <Ping online={!!data.Status} />}
          <Link to={`/users/${data.name}`} className="text-emerald-500">
            {!!data.Admin && "Admin "}
            {data.name}
          </Link>
        </>
      )}
    </div>
  )
}
