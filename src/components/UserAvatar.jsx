export default function UserAvatar({ userAvatar, username = "", isPrinc = false }) {
  return (
    <div>
      <img className={`rounded-full ${isPrinc ? `w-40` : `w-6`}`} src={userAvatar} alt={username} />
    </div>
  )
}