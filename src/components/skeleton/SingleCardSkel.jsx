export default function SingleCardSkel() {
  return (
    <div className={`border-2 border-secColor hover:bg-secColor/30 rounded-3xl p-5 bg-secColor/30 h-64 animate-pulse`}>
      <div className="flex flex-col h-full justify-between">
        <p className="h-4 bg-secColor rounded-md w-32"></p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center w-full space-x-2 max-w-[480px]">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          </div>
          <div className="flex items-center space-x-2 w-full ">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-32"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-36"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="h-2.5 bg-secColor rounded-md w-12"></p>
          <div className="flex gap-2">
            <div className="w-7 h-7 bg-secColor rounded-full"></div>
            <div className="w-7 h-7 bg-secColor rounded-full"></div>
            <div className="w-7 h-7 bg-secColor rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
