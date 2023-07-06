import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"
import { useMatch } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
// import { useQueryParams, NumberParam, withDefault } from "use-query-params"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  const isReposPath = useMatch({ path: "/:username", end: true })
  const [path, setPath] = useState("")
  const [pageParam, setPageParam] = useSearchParams()

  const page = Number(pageParam.get("page"))

  const search = useLocation().search

  return (
    <>
      {!isRootPath && !isReposPath ? (
        <Link to={`/${path}?page=${page}`}>
          <div className="pb-8 underline">Back</div>
        </Link>
      ) : null}
      <Routes>
        <Route path="/*" element={<Home path={path} page={page} setPageParam={setPageParam} search={search} />} />
        <Route path="/:username/:reponame/*" element={<SingleRepo setPath={setPath} />} />
      </Routes>
      <div className="text-center pt-20 pb-4">Built with React, React Query, Tailwindcss</div>
    </>
  )
}

export default App
