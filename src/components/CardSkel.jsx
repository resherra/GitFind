export default function CardSkel() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="border-2 border-secColor rounded-3xl p-5 animate-pulse">
          <div className="flex flex-col gap-12">
            <div className="h-4 bg-gray-600 rounded-md w-24"></div>
            <div className="h-2.5 bg-gray-700 rounded-md w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="border-2 border-secColor rounded-3xl p-5 animate-pulse">
          <div className="flex flex-col gap-12">
            <div className="h-4 bg-gray-600 rounded-md w-24"></div>
            <div className="h-2.5 bg-gray-700 rounded-md w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
        <div className="border-2 border-secColor rounded-3xl p-5 animate-pulse">
          <div className="flex flex-col gap-12">
            <div className="h-4 bg-gray-600 rounded-md w-24"></div>
            <div className="h-2.5 bg-gray-700 rounded-md w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
}
