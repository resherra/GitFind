import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import RepoCard from "../components/RepoCard"
import User from "../components/User"

export default function Home() {
  const [user, setUser] = useState("")

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
      <div className="text-center pb-20">
        <header className="pb-20">
          <h1 className="text-3xl font-semibold pb-5">Git Find</h1>
          <h3 className="text-xl font-semibold">Look up a GitHub user and explore their profile...</h3>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            reposQuery.refetch()
          }}
        >
          <input className="bg-transparent border-2 border-secColor rounded-full px-2 py-2 mr-4" type="text" onChange={(e) => setUser(e.target.value)} />
          <button className=" bg-secColor text-textColor rounded-full px-6 py-2" type="submit">
            Search
          </button>
        </form>
      </div>

      {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
        "loading..."
      ) : (
        <div className="flex gap-36">
          <User username={reposQuery.data[1].owner.login} userAvatar={reposQuery.data[1].owner.avatar_url} />
          <ul className="w-full">
            {
              <li>
                <div className="flex flex-col gap-8">
                  {reposQuery.data.map((repo) => (
                    <Link key={repo.node_id} to={`/${repo.owner.login}/${repo.name}`}>
                      <RepoCard reponame={repo.name} />
                    </Link>
                  ))}{" "}
                </div>
              </li>
            }
          </ul>
        </div>
      )}
    </>
  )
}
