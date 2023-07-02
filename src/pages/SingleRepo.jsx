import { Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import Commits from "./Commits"
import PR from "./PR"
import Issues from "./Issues"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"
import RepoCard from "../components/RepoCard"
import { useMatch } from "react-router-dom"
import { useEffect } from "react"

export default function SingleRepo({ setPath }) {
  const { username, reponame } = useParams()
  const isRootPath = useMatch({ path: "/:username/:reponame", end: true })

  const singleRepoQuery = useQuery(["repo", reponame], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}`)
    return res.data
  })

  const coQuery = useQuery(["repo", reponame, "contributors"], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/contributors`)
    return res.data
  })

  const repo = singleRepoQuery.data
  const contributors = coQuery.data

  useEffect(() => {
    setPath(username)
  }, [username])

  return (
    <div className="min-h-screen">
      <header className="pb-20">
        <RepoCard reponame={repo?.name} repoUrl={repo?.html_url} desc={repo?.description} isSingle={true} language={repo?.language} contributors={contributors} />
      </header>

      <div className="flex gap-5 pb-8">
        <Link to="commits">
          <div className="bg-secColor px-4 py-2 rounded-full text-sm ">Commits</div>
        </Link>
        <Link to="PR">
          <div className="bg-secColor px-4 py-2 rounded-full text-sm ">PR</div>
        </Link>
        <Link to="issues">
          <div className="bg-secColor px-4 py-2 rounded-full text-sm ">Issues</div>
        </Link>
      </div>

      {isRootPath && <Commits username={username} reponame={reponame} />}

      <Routes>
        <Route path="/commits" element={<Commits username={username} reponame={reponame} />} />
        <Route path="/PR" element={<PR username={username} reponame={reponame} />} />
        <Route path="/issues" element={<Issues username={username} reponame={reponame} />} />
      </Routes>
    </div>
  )
}
