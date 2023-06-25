import { Routes, Route } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import Commits from "./Commits"
import PR from "./PR"
import Issues from "./Issues"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"
import RepoCard from "../components/RepoCard"

export default function SingleRepo() {
  const { username, reponame } = useParams()

  const repoQuery = useQuery(["repo", reponame], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}`)

    return res.data
  })

  return (
    <>
      <header className="pb-20">
        <RepoCard reponame={reponame} />
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

      <Routes>
        <Route path="/commits" element={<Commits username={username} reponame={reponame} />} />
        <Route path="/PR" element={<PR username={username} reponame={reponame} />} />
        <Route path="/issues" element={<Issues username={username} reponame={reponame} />} />
      </Routes>
    </>
  )
}
