import UserAvatar from "./UserAvatar"

export default function User({ username, userAvatar }) {
  return (
    <div className="flex flex-col gap-8 items-center">
      <UserAvatar userAvatar={userAvatar} username={username} isPrinc={true} />
      <div>@{username}</div>
    </div>
  )
}
