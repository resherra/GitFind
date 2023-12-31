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
import { useContext } from "react"
import stateContext from "../context/stateContext"

export default function Repos() {
  const appState = useContext(stateContext)
  const page = appState.page
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
  }, [page])

  useEffect(() => {
    setEmpty(false)
  }, [username])

  useEffect(() => {
    if (page === 0 && userQuery.isSuccess) {
      appState.setPageParam({ page: 1 })
    }
  }, [page, userQuery])

  return (
    <>
      <div className="flex flex-col gap-8 justify-between">
        {userQuery.isLoading ? <UserSkel /> : userQuery.isSuccess ? <User username={userQuery.data?.login} userAvatar={userQuery.data?.avatar_url} company={userQuery.data?.company} location={userQuery.data?.location} /> : userQuery.isError ? <>{userQuery.error.response.status === 404 ? <div className="text-md md:text-2xl font-semibold">The user you are looking for doesn't exist!</div> : <div>{userQuery.error.message}</div>}</> : null}
        {!userQuery.isError && (
          <>
            {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
              <CardSkel />
            ) : reposQuery.data.length === 0 ? (
              <div className="text-md md:text-2xl font-semibold w-[80%] ">Ooops! This page is empty!...</div>
            ) : (
              <ul>
                {
                  <li className="flex flex-col gap-8">
                    {reposQuery.data?.map((repo) => (
                      <Link key={repo.node_id} to={`/${repo.owner.login}/${repo.name}${appState.search}`}>
                        <RepoCard reponame={repo.name} language={repo.language} forksCount={repo.forks_count} starsCount={repo.stargazers_count} />
                      </Link>
                    ))}
                  </li>
                }
              </ul>
            )}
          </>
        )}
      </div>
      {userQuery.isSuccess && reposQuery.data && reposQuery.data.length !== 0 ? <Pagination empty={empty} setEmpty={setEmpty} /> : null}
    </>
  )
}
