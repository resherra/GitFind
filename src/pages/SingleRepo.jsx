import { Routes, Route } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import Commits from "./Commits"
import PR from "./PR"
import Issues from "./Issues"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function SingleRepo() {
  const { username, reponame } = useParams()

  const repoQuery = useQuery(["repo", reponame], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}`)

    return res.data
  })

  return (
    <>
      <h2>single repo</h2>

      {repoQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <h1> {repoQuery.data.name} </h1>
          <h4> {repoQuery.data.language} </h4>
          <a target="blank" href={repoQuery.data.svn_url}>
            visit the repo in github
          </a>
        </>
      )}

      <nav>
        <Link to="commits">commits</Link>
        <Link to="PR">PR</Link>
        <Link to="issues">issues</Link>
      </nav>

      <Routes>
        <Route path="/commits" element={<Commits username={username} reponame={reponame} />} />
        <Route path="/PR" element={<PR username={username} reponame={reponame} />} />
        <Route path="/issues" element={<Issues username={username} reponame={reponame} />} />
      </Routes>
    </>
  )
}
