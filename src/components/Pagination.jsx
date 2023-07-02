export default function Pagination({ page, setPage, empty, setEmpty }) {
  return (
    <div className="flex gap-8 items-center self-center pt-28">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage((prev) => prev - 1)
          setEmpty(false)
        }}
        className=" bg-secColor disabled:text-white/50 disabled:bg-textColor/5 w-28 px-3 py-2 rounded-xl"
      >
        Previous
      </button>
      <div className="bg-secColor w-fit px-3 py-2 rounded-xl">{page}</div>
      <button disabled={empty} onClick={() => setPage((prev) => prev + 1)} className="bg-secColor disabled:bg-textColor/5 disabled:text-white/50  w-28 px-3 py-2 rounded-xl">
        Next
      </button>
    </div>
  )
}
