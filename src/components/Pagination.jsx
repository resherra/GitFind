export default function Pagination({ empty, setEmpty, page, setPageParam }) {
  function handleNextButton() {
    setPageParam({ page: page + 1 })
  }

  function handlePreviousButton() {
    setPageParam({ page: page - 1 })
    setEmpty(false)
  }

  return (
    <div className="flex gap-3 md:gap-8 items-center self-center pt-20 md:pt-28">
      <button disabled={page === 1} onClick={handlePreviousButton} className="bg-secColor disabled:text-white/50 disabled:bg-textColor/5  w-20 md:w-28 px-3 py-[6px] rounded-md md:rounded-xl">
        Previous
      </button>
      <div className="bg-secColor w-fit px-3 py-[6px] rounded-md md:rounded-xl">{page}</div>
      <button disabled={empty} onClick={handleNextButton} className="bg-secColor disabled:bg-textColor/5 disabled:text-white/50   w-20 md:w-28 px-3 py-[6px] rounded-md md:rounded-xl">
        Next
      </button>
    </div>
  )
}
