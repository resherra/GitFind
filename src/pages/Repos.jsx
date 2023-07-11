import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"
import User from "../components/User"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import RepoCard from "../components/RepoCard"
import Pagination from "../components/Pagination"
import CardSkel from "../components/skeleton/CardSkel"
import UserSkel from "../components/skeleton/UserSkel"

export default function Repos({ search, page, setPageParam }) {
  const { username } = useParams()
  const [empty, setEmpty] = useState(false)
  const queryClient = useQueryClient()

  const userQuery = useQuery(
    ["user", username],
    async () => {
      const res = await axios.get(`/users/${username}`)

      return res.data
    },
    {
      retry: false,
    }
  )

  const fetchRepos = async (user, page) => {
    const res = await axios.get(`/users/${user}/repos?per_page=6&page=${page}`)
    return res.data
  }

  const reposQuery = useQuery(["user", username, "repos", { page }], () => fetchRepos(username, page), {
    enabled: userQuery.isSuccess,
  })

  useEffect(() => {
    async function prefetchNext() {
      await queryClient.prefetchQuery(["user", username, "repos", { page: page + 1 }], () => fetchRepos(username, page + 1))
      const nextPage = await queryClient.getQueryData(["user", username, "repos", { page: page + 1 }], { exact: true })
      if (nextPage?.length === 0) {
        setEmpty(true)
      }
    }

    if (page > 0) {
      prefetchNext()
    }
  }, [page, reposQuery])

  useEffect(() => {
    setEmpty(false)
  }, [username])

  useEffect(() => {
    if (page === 0 && userQuery.isSuccess) {
      setPageParam({ page: 1 })
    }
  }, [page, userQuery])

  return (
    <>
      <div className="flex gap-8 justify-between">
        {userQuery.isLoading ? <UserSkel /> : userQuery.isSuccess ? <User username={userQuery.data?.login} userAvatar={userQuery.data?.avatar_url} /> : userQuery.isError ? <>{userQuery.error.response.status === 404 ? <div className="text-2xl font-semibold">The user you are looking for doesn't exist!</div> : <div>{userQuery.error.message}</div>}</> : null}

        {!userQuery.isError && (
          <div className="w-full">
            {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
              <CardSkel />
            ) : reposQuery.data.length === 0 ? (
              <div className="text-2xl font-semibold">Ooops! This page seems to be empty!</div>
            ) : (
              <ul>
                {
                  <li className="flex flex-col gap-8">
                    {reposQuery.data?.map((repo) => (
                      <Link key={repo.node_id} to={`/${repo.owner.login}/${repo.name}${search} `}>
                        <RepoCard reponame={repo.name} language={repo.language} />
                      </Link>
                    ))}
                  </li>
                }
              </ul>
            )}
          </div>
        )}
      </div>
      {userQuery.isSuccess && reposQuery.data && reposQuery.data.length !== 0 ? <Pagination empty={empty} setEmpty={setEmpty} page={page} setPageParam={setPageParam} /> : null}
    </>
  )
}
