import UserAvatar from "./UserAvatar"
import { FiExternalLink } from "react-icons/fi"

export default function User({ username, userAvatar }) {
  return (
    <div className="bg-secColor/30 h-fit p-12 rounded-3xl">
      <div className="flex flex-col gap-8 items-center">
        <UserAvatar userAvatar={userAvatar} username={username} isPrinc={true} />
        <div className="flex gap-8 items-center">
          <div>@{username}</div>
          <a href={`https://github.com/${username}`} target="_blank">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}
