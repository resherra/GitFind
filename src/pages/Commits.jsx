import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function Commits({ username, reponame }) {
  const commitsQuery = useQuery(["repo", reponame, "commits"], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/commits`)

    return res.data
  })

  commitsQuery.isSuccess && console.log(commitsQuery.data)

  return (
    <div>
      {commitsQuery.isLoading ? (
        "loading..."
      ) : (
        <ul>
          {commitsQuery.data?.map((commit) => (
            <div key={commit.sha}>
              <h2>
                {commit.commit.message} by {commit.author?.login}{" "}
              </h2>
              <img className="w-6" src={commit.author?.avatar_url} alt="" />
            </div>
          ))}
        </ul>
      )}
    </div>
  )
}
