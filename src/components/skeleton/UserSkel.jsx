export default function UserSkel() {
  return (
    <div className="bg-secColor/30 h-fit w-6/12 p-10 rounded-3xl animate-pulse">
      <div className="flex flex-col gap-8 ">
        <div className="w-40 h-40 rounded-full bg-primColor"></div>
        <div className="h-4 bg-primColor rounded-md w-24"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
