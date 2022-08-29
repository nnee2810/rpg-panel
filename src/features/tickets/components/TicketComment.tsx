import { UserLink } from "components/core"
import moment from "moment"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { ITicketComment } from "../interfaces"

interface TicketCommentProps {
  data: ITicketComment
}

export default function TicketComment({ data }: TicketCommentProps) {
  return (
    <div className="flex space-x-2">
      <LazyLoadImage
        alt="avatar"
        src={`https://ui-avatars.com/api/?name=${data.user.name}&background=111827&color=fff`}
        className="w-8 h-8 rounded-full"
      />
      <div>
        <div className="flex space-x-2">
          <div className="font-bold">
            <UserLink data={data.user} />
          </div>
          <div className="text-gray-400">
            {moment(data.createdAt).fromNow()}
          </div>
        </div>
        <div>{data.content}</div>
      </div>
    </div>
  )
}
