import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import DetailsCard from "../components/DetailsCard"

export default function Issues({ username, reponame }) {
  const issuesQuery = useQuery(["repo", reponame, "issues"], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/issues`)

    return res.data
  })

  return (
    <div className="w-3/4">
      {issuesQuery.isLoading ? (
        "Loading..."
      ) : (
        <ul className="flex flex-col gap-8">
          {issuesQuery.data?.map((issue) => (
            <li key={issue.id}>
              <DetailsCard author={issue.user.login} avatar={issue.user.avatar_url} body={issue.body} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
