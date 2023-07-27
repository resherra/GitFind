export default function UserSkel() {
  return (
    <div className="bg-secColor/30 border border-secColor h-36 md:h-72 px-5 md:px-10 rounded-3xl flex items-center animate-pulse">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-8 md:gap-14">
          <div className="w-12 h-12 self-center md:w-40 md:h-40 bg-secColor rounded-full"></div>
          <div>
            <div className="bg-secColor h-3 md:h-4 rounded-md w-28 mb-5"></div>
            <div className="h-1.5 md:h-2 bg-gray-600 rounded-md w-16 mb-12 "></div>
          </div>
        </div>
      </div>
    </div>
  )
}
