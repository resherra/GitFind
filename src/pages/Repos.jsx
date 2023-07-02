import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"
import User from "../components/User"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import RepoCard from "../components/RepoCard"
import Pagination from "../components/Pagination"

export default function Repos({ page, setPage }) {
  const { username } = useParams()
  const [empty, setEmpty] = useState(false)
  const queryClient = useQueryClient()

  //query function
  const fetchRepos = async (user, page) => {
    const res = await axios.get(`/users/${user}/repos?per_page=6&page=${page}`)
    return res.data
  }

  //query
  const reposQuery = useQuery(["user", username, "repos", { page }], () => fetchRepos(username, page), {
    keepPreviousData: true,
  })

  useEffect(() => {
    async function prefetchNext() {
      await queryClient.prefetchQuery(["user", username, "repos", { page: page + 1 }], () => fetchRepos(username, page + 1))
      const nextPage = await queryClient.getQueryData(["user", username, "repos", { page: page + 1 }], { exact: true })
      if (nextPage.length === 0) {
        setEmpty(true)
      }
    }

    prefetchNext()
  }, [page, queryClient])

  return (
    <>
      {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
        "loading..."
      ) : (
        <div className="flex gap-36">
          <User username={reposQuery.data[1]?.owner.login} userAvatar={reposQuery.data[1]?.owner.avatar_url} />
          <ul className="w-full">
            {
              <li>
                <div className="flex flex-col gap-8">
                  {reposQuery.data?.map((repo) => (
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
      {reposQuery.data ? <Pagination page={page} setPage={setPage} empty={empty} setEmpty={setEmpty} /> : null}
    </>
  )
}
