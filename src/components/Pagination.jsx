export default function Pagination() {
  return (
    <div className="flex gap-8 items-center">
      <button className="bg-secColor w-28 px-3 py-2 rounded-xl">Previous</button>
      <div className="bg-secColor w-fit px-3 py-2 rounded-xl">1</div>
      <button className="bg-secColor w-28 px-3 py-2 rounded-xl">Next</button>
    </div>
  )
}
