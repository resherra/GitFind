export default function LoadButton({ query }) {
  return (
    <button onClick={() => query.fetchNextPage()} disabled={query.isFetchingNextPage && !query.hasNextPage} className="bg-secColor min-w-28 max-w-fit px-3 py-2 rounded-xl">
      {query.isFetchingNextPage ? "Loading..." : "Load more"}
    </button>
  )
}
