import UserAvatar from "./UserAvatar"
import { FiExternalLink } from "react-icons/fi"

export default function DetailsCard({ author, avatar, body, detailUrl }) {
  return (
    <>
      <div className="flex items-center justify-between bg-secColor rounded-t-2xl p-2">
        <div className="flex items-center gap-3">
          <UserAvatar userAvatar={avatar} />
          <div className="text-sm">{author}</div>
        </div>
        <a href={detailUrl} target="_blank">
          <FiExternalLink />
        </a>
      </div>
      <div className="border-2 border-secColor px-4 py-2">
        <p>{body}</p>
      </div>
    </>
  )
}
