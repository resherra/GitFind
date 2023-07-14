import UserAvatar from "./UserAvatar"
import { FiExternalLink } from "react-icons/fi"
import { MdLocationCity } from "react-icons/md"

export default function User({ username, userAvatar, company, location }) {
  return (
    <div className="bg-secColor/30 h-fit w-6/12 p-10 rounded-3xl">
      <div className="flex flex-col gap-8 items-center">
        <UserAvatar userAvatar={userAvatar} username={username} isPrinc={true} />
        <div className="flex w-full justify-between items-center">
          <div>@{username}</div>
          <a href={`https://github.com/${username}`} target="_blank">
            <FiExternalLink />
          </a>
        </div>
        <div className="flex flex-row items-center justify-baseline gap-8">
          <MdLocationCity />
          <div>{location}</div>
        </div>
      </div>
    </div>
  )
}
