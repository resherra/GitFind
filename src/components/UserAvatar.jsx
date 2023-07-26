export default function UserAvatar({ userAvatar = "", username = "", isPrinc = false }) {
  return (
    <div>
      <img className={`rounded-full ${isPrinc ? `w-12 lg:w-40` : `w-4 lg:w-7`}`} src={userAvatar} alt={username} />
    </div>
  )
}
