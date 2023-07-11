const items = [1, 2, 3, 4, 5, 6]

export default function CardSkel({ isSingle = false }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((index) => (
        <div key={index} className="border-2 border-secColor rounded-3xl p-5 animate-pulse h-36">
          <div className="flex flex-col h-full justify-between">
            <div className="h-4 bg-gray-600 rounded-md w-24"></div>
            <div className="h-2.5 bg-gray-700 rounded-md w-12"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  )
}
