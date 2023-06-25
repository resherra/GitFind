import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import DetailsCard from "../components/DetailsCard"

export default function PR({ username, reponame }) {
  const pullsQuery = useQuery(["repo", reponame, "pulls"], async () => {
    const res = await axios.get(`https://api.github.com/repos/${username}/${reponame}/pulls`)

    return res.data
  })

  return (
    <div className="w-3/4">
      {pullsQuery.isLoading ? (
        "loading..."
      ) : (
        <ul className="flex flex-col gap-8">
          {pullsQuery.data?.map((pulls) => (
            <li key={pulls.id}>
              <DetailsCard author={pulls.user.login} avatar={pulls.user.avatar_url} body={pulls.body} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
