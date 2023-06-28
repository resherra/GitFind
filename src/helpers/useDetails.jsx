import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useDetails(username, reponame, path) {
  const detailsQuery = useQuery(["repo", reponame, path], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/${path}`)

    return res.data
  })

  return detailsQuery
}
