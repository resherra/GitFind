import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useDetails(username, reponame, path) {
  const detailsQuery = useInfiniteQuery(
    ["repo", reponame, path],
    async ({ pageParam = 1 }) => {
      const res = await axios.get(`/repos/${username}/${reponame}/${path}?per_page=6&page=${pageParam}`)

      console.log(pageParam)

      return res.data
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length === 0) {
          return
        }

        return pages.length + 1
      },
    }
  )

  return detailsQuery
}
