export default function UserAvatar({ userAvatar = "", username = "", isPrinc = false }) {
  return (
    <div>
      <img className={`rounded-full ${isPrinc ? `w-12 md:w-40` : `w-4 md:w-7`}`} src={userAvatar} alt={username} />
    </div>
  )
}
