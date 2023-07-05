import { useState } from "react"
import { useEffect } from "react"

export default function LoadButton({ query }) {
  const [len, setLen] = useState()

  useEffect(() => {
    setLen(query.data?.pages.slice(-1)[0].length)
  }, [query])

  return (
    <button
      onClick={() => {
        query.fetchNextPage()
      }}
      disabled={len < 6 || (!query.isFetchingNextPage && !query.hasNextPage)}
      className="bg-secColor disabled:text-white/50 disabled:bg-textColor/5 min-w-28 max-w-fit px-3 py-2 rounded-xl"
    >
      {query.isFetchingNextPage ? "Loading..." : "Load more"}
    </button>
  )
}
