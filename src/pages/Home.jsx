import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Home() {
  const [user, setUser] = useState("")
  const queryClient = useQueryClient()

  const reposQuery = useQuery(
    ["user", user, "repos"],
    async () => {
      const res = await axios.get(`/users/${user}/repos`)

      return res.data
    },
    {
      enabled: false,
      staleTime: Infinity,
    }
  )

  return (
    <>
      <h1>welcode to GiiitFing</h1>
      <h3>search for a user, navigate repos...</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          reposQuery.refetch()
        }}
      >
        <label htmlFor="search">search for a user:</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button type="submit">search</button>
      </form>

      {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <ul>
            {
              <li>
                <div>
                  {reposQuery.data.map((repo) => (
                    <Link key={repo.node_id} to={`/${repo.owner.login}/${repo.name}`}>
                      <div className={`px-5 py-5 border border-blue-950 max-w-min rounded-2xl my-5`}>
                        <h3>{repo.name}</h3>
                      </div>
                    </Link>
                  ))}{" "}
                </div>
              </li>
            }
          </ul>
        </>
      )}
    </>
  )
}
