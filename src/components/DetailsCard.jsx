import UserAvatar from "./UserAvatar"
import { FiExternalLink } from "react-icons/fi"

export default function DetailsCard({ author, avatar, body, detailUrl }) {
  return (
    <>
      <div className="flex items-center justify-between bg-secColor rounded-t-2xl p-[6px] md:p-2">
        <div className="flex items-center gap-3">
          <UserAvatar userAvatar={avatar} />
          <div>{author}</div>
        </div>
        <a href={detailUrl} target="_blank">
          <FiExternalLink />
        </a>
      </div>
      <div className="border md:border-2 border-secColor px-3 py-4 md:px-4 md:py-6 ">
        <p className="whitespace-pre-wrap max-h-96 overflow-hidden">{body}</p>
      </div>
    </>
  )
}
