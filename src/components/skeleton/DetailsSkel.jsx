const items = [1, 2, 3, 4, 5, 6]

export default function DetailsSkel() {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex items-center justify-between bg-secColor rounded-t-2xl p-[6px] md:p-2">
            <div className="flex items-center gap-3">
              <div className="bg-primColor w-4 h-4 md:w-7 md:h-7 rounded-full"></div>
              <div className="h-2 md:h-2.5 bg-primColor rounded-md w-12"></div>
            </div>
          </div>
          <div className="border-2 border-secColor px-3 py-4 md:px-4 md:py-6">
            <div role="status" className="space-y-2.5 animate-pulse max-w-md">
              <div className="flex items-center w-full space-x-2">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[480px]">
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full space-x-2 max-w-[400px]">
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
