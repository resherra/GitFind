export default function UserSkel() {
  return (
    <div className="bg-secColor/30 border border-secColor h-36 lg:h-72 px-5 lg:px-10 rounded-3xl flex items-center animate-pulse">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-start gap-8 lg:gap-14">
          <div className="w-12 h-12 self-center lg:w-40 lg:h-40 bg-secColor rounded-full"></div>
          <div>
            <div className=" bg-secColor h-4 rounded-md w-32 mb-5"></div>
            <div className="h-2 bg-gray-600 rounded-md w-16 mb-12 "></div>
            <div className="h-2 bg-gray-600 rounded-md w-12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
