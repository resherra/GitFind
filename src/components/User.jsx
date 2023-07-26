import UserAvatar from "./UserAvatar"
import { FiExternalLink } from "react-icons/fi"
import { MdLocationCity } from "react-icons/md"

export default function User({ username, userAvatar, company, location }) {
  return (
    <div className="bg-secColor/30 border border-secColor h-36 lg:h-72 px-5 lg:px-10 rounded-3xl flex items-center">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-8 lg:gap-14">
          <div className="self-center">
            <UserAvatar userAvatar={userAvatar} username={username} isPrinc={true} />
          </div>
          <div>
            <div className="lg:text-2xl font-semibold pb-5">@{username}</div>
            {company && (
              <div className="flex flex-row items-center justify-baseline gap-4 pb-12">
                <MdLocationCity />
                <div>{company}</div>
              </div>
            )}
            {location && <div className="text-brandBlue w-2/4 lg:w-full">{location}</div>}
          </div>
        </div>
        <a href={`https://github.com/${username}`} target="_blank">
          <FiExternalLink />
        </a>
      </div>
    </div>
  )
}
