import { Ping } from "components/basic"
import { Link } from "react-router-dom"

interface UserLinkProps {
  name: string
  online?: boolean
}

export default function UserLink({ name, online }: UserLinkProps) {
  return (
    <div className="flex items-center space-x-2">
      {online !== undefined && <Ping online={online} />}
      <Link to={`/users/${name}`} className="text-emerald-500">
        {name}
      </Link>
    </div>
  )
}
