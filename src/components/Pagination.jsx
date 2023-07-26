export default function Pagination({ empty, setEmpty, page, setPageParam }) {
  function handleNextButton() {
    setPageParam({ page: page + 1 })
  }

  function handlePreviousButton() {
    setPageParam({ page: page - 1 })
    setEmpty(false)
  }

  return (
    <div className="flex gap-3 lg:gap-8 items-center self-center pt-20 lg:pt-28">
      <button disabled={page === 1} onClick={handlePreviousButton} className="bg-secColor disabled:text-white/50 disabled:bg-textColor/5  w-20 lg:w-28 px-3 py-[6px] rounded-lg lg:rounded-xl">
        Previous
      </button>
      <div className="bg-secColor w-fit px-3 py-[6px] rounded-lg lg:rounded-xl">{page}</div>
      <button disabled={empty} onClick={handleNextButton} className="bg-secColor disabled:bg-textColor/5 disabled:text-white/50   w-20 lg:w-28 px-3 py-[6px] rounded-lg lg:rounded-xl">
        Next
      </button>
    </div>
  )
}
