import UserAvatar from "./UserAvatar"

export default function DetailsCard({ author, avatar, body }) {
  return (
    <>
      <div className="flex items-center gap-3 bg-secColor rounded-t-2xl p-1">
        <UserAvatar userAvatar={avatar} />
        <div className="text-sm">{author}</div>
      </div>
      <div className="border-2 border-secColor px-4 py-2">
        <p>{body}</p>
      </div>
    </>
  )
}
