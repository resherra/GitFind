import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import RepoCard from "../components/RepoCard"
import User from "../components/User"
import { useEffect } from "react"
import Pagination from "../components/Pagination"

export default function Home() {
  //search value
  const [user, setUser] = useState("")
  const [page, setPage] = useState(1)
  const [sent, setSent] = useState(false)
  const [empty, setEmpty] = useState(false)
  const queryClient = useQueryClient()

  //fetch function
  const fetchRepos = async (user, page) => {
    if (user !== "") {
      const res = await axios.get(`/users/${user}/repos?per_page=6&page=${page}`)
      return res.data
    }

    return 0
  }

  //query
  const reposQuery = useQuery(["user", user, "repos", { page }], () => fetchRepos(user, page), {
    enabled: sent || page !== 1,
  })

  useEffect(() => {
    async function waiting() {
      await queryClient.prefetchQuery(["user", user, "repos", { page: page + 1 }], () => fetchRepos(user, page + 1))
      const nextPage = await queryClient.getQueryData(["user", user, "repos", { page: page + 1 }], { exact: true })
      if (nextPage.length === 0) {
        setEmpty(true)
      }
    }

    waiting()
  }, [page, queryClient])

  //body
  return (
    <>
      <div className="flex flex-col">
        <div className="text-center pb-20">
          <header className="pb-20">
            <h1 className="text-3xl font-semibold pb-5">Git Find</h1>
            <h3 className="text-xl font-semibold">Look up a GitHub user and explore their profile...</h3>
          </header>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              setSent(true)
              await reposQuery.refetch()
              setSent(false)
            }}
            className="flex flex-row justify-between"
          >
            <input className="bg-transparent border-2 border-secColor rounded-full px-4 py-2 mr-4 w-full " type="text" onChange={(e) => setUser(e.target.value)} />
            <button className=" bg-secColor text-textColor rounded-full px-6 py-2" type="submit">
              Search
            </button>
          </form>
        </div>

        {/* repos */}
        {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
          "loading..."
        ) : (
          <div className="flex gap-36">
            <User username={reposQuery.data[1]?.owner.login} userAvatar={reposQuery.data[1]?.owner.avatar_url} />
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

        {/* pagination */}
        {reposQuery.data ? <Pagination page={page} setPage={setPage} empty={empty} setEmpty={setEmpty} /> : null}
      </div>
    </>
  )
}
