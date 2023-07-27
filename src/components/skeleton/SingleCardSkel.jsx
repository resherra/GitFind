export default function SingleCardSkel() {
  return (
    <div className={`border md:border-2 border-secColor  rounded-2xl md:rounded-3xl p-3 md:p-5 bg-secColor/30 h-44 md:h-64 animate-pulse`}>
      <div className="flex flex-col h-full justify-between">
        <p className="h-3 md:h-4 bg-secColor rounded-md w-32"></p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-full"></div>
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-full"></div>
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center space-x-2 w-full ">
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-32"></div>
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-24"></div>
            <div className="h-2 md:h-2.5 rounded-full bg-gray-600 w-36"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="h-2 md:h-2.5 bg-secColor rounded-md w-12"></p>
          <div className="flex gap-1 md:gap-2">
            <div className="w-4 h-4 md:w-7 md:h-7 bg-secColor rounded-full"></div>
            <div className="w-4 h-4 md:w-7 md:h-7 bg-secColor rounded-full"></div>
            <div className="w-4 h-4 md:w-7 md:h-7 bg-secColor rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
