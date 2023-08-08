import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"
import { useMatch } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { inject } from "@vercel/analytics"
import { useEffect } from "react"
import stateContext from "./context/stateContext"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  const isReposPath = useMatch({ path: "/:username", end: true })
  const [path, setPath] = useState("")
  const [pageParam, setPageParam] = useSearchParams()
  const [page, setPage] = useState()

  useEffect(() => {
    inject()
  }, [])

  useEffect(() => {
    setPage(Number(pageParam.get("page")))
  }, [pageParam])

  const search = useLocation().search

  return (
    <>
      {!isRootPath && !isReposPath ? (
        <Link to={`/${path}?page=${page}`}>
          <div className="pb-8 underline">Back</div>
        </Link>
      ) : null}
      <stateContext.Provider value={{ page, setPageParam, search }}>
        <Routes>
          <Route path="/*" element={<Home path={path} />} />
          <Route path="/:username/:reponame/*" element={<SingleRepo setPath={setPath} />} />
        </Routes>
      </stateContext.Provider>
      <div className="text-center pt-20 md:pt-24 md:pb-4">
        Built by{" "}
        <a href="https://chred.me" target="_blank" className="font-semibold text-red-400">
          Chred
        </a>{" "}
        using React, React Query, Tailwindcss.
      </div>
    </>
  )
}

export default App
