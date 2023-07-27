const items = [1, 2, 3, 4, 5, 6]

export default function CardSkel({ isSingle = false }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((index) => (
        <div key={index} className="border md:border-2 border-secColor rounded-2xl md:rounded-3xl p-3 md:p-5 animate-pulse h-32 md:h-40">
          <div className="flex flex-col h-full justify-between">
            <div className="h-3 md:h-4 bg-gray-600 rounded-md w-24"></div>
            <div className="flex justify-between">
              <div className="h-2 md:h-2.5 bg-gray-700 rounded-md w-12"></div>
              <div className="h-1 md:h-2.5 bg-gray-600 rounded-md w-8"></div>
            </div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  )
}
