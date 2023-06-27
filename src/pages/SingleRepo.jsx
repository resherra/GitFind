import { Routes, Route } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"
import Commits from "./Commits"
import PR from "./PR"
import Issues from "./Issues"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"
import RepoCard from "../components/RepoCard"
import { useMatch } from "react-router-dom"

export default function SingleRepo() {
  const { username, reponame } = useParams()
  const isRootPath = useMatch({ path: "/:username/:reponame", end: true })

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

      {isRootPath && <Commits username={username} reponame={reponame} />}

      <Routes>
        <Route path="/commits" element={<Commits username={username} reponame={reponame} />} />
        <Route path="/PR" element={<PR username={username} reponame={reponame} />} />
        <Route path="/issues" element={<Issues username={username} reponame={reponame} />} />
      </Routes>
    </>
  )
}
