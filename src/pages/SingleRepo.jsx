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
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import SingleCardSkel from "../components/skeleton/SingleCardSkel"

export default function SingleRepo({ setPath, search }) {
  const navigate = useNavigate()
  const { username, reponame } = useParams()
  const isRootPath = useMatch({ path: "/:username/:reponame", end: true })
  const route = useParams()["*"]

  const singleRepoQuery = useQuery(
    ["repo", reponame],
    async () => {
      const res = await axios.get(`/repos/${username}/${reponame}`)
      return res.data
    },
    {
      retry: false,
      onError: (err) => {
        if (err.response.status === 404) {
          toast.error(`The page you're looking for is not found!`, { className: "bg-secColor text-textColor rounded-2xl" })
        } else {
          toast.error(err.message, { className: "text-textColor rounded-2xl" })
        }

        navigate("/")
      },
    }
  )

  const coQuery = useQuery(
    ["repo", reponame, "contributors"],
    async () => {
      const res = await axios.get(`/repos/${username}/${reponame}/contributors`)
      return res.data
    },
    {
      enabled: singleRepoQuery.isSuccess,
    }
  )

  const repo = singleRepoQuery.data
  const contributors = coQuery.data

  useEffect(() => {
    setPath(username)
  }, [username])

  return (
    <div className="min-h-screen">
      <header className="pb-20">{singleRepoQuery.isLoading ? <SingleCardSkel /> : <RepoCard reponame={repo?.name} repoUrl={repo?.html_url} desc={repo?.description} isSingle={true} language={repo?.language} contributors={contributors} />}</header>

      <div className="flex gap-5 pb-8">
        <Link to={`commits${search}`} oncli>
          <button className={`bg-secColor px-3 py-[6px] lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm ` + `${route === "commits" || route === "" ? "border" : ""}`}>Commits</button>
        </Link>
        <Link to={`PR${search}`}>
          <button className={`bg-secColor px-3 py-[6px] lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm ` + `${route === "PR" ? "border" : ""}`}>PR</button>
        </Link>
        <Link to={`issues${search}`}>
          <button className={`bg-secColor px-3 py-[6px] lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm ` + `${route === "issues" ? "border" : ""}`}>Issues</button>
        </Link>
      </div>

      {isRootPath && singleRepoQuery.isSuccess ? <Commits username={username} reponame={reponame} /> : null}

      <Routes>
        <Route path="/commits" element={<Commits username={username} reponame={reponame} />} />
        <Route path="/PR" element={<PR username={username} reponame={reponame} />} />
        <Route path="/issues" element={<Issues username={username} reponame={reponame} />} />
      </Routes>
    </div>
  )
}
