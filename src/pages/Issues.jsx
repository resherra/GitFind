import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Issues({ username, reponame }) {
  const issuesQuery = useQuery(["repo", reponame, "issues"], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/issues`)

    return res.data
  })

  issuesQuery.isSuccess && console.log(issuesQuery.data)

  return <>issues</>
}
