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
import dispatchContext from "./context/dispatchContext"
import { useImmerReducer } from "use-immer"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  const isReposPath = useMatch({ path: "/:username", end: true })
  const [path, setPath] = useState("")
  const [pageParam, setPageParam] = useSearchParams()

  useEffect(() => {
    inject()
  }, [])

  const page = Number(pageParam.get("page"))

  const search = useLocation().search

  const initialState = {}

  function ourReducer(draft, action) {}

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  return (
    <>
      {!isRootPath && !isReposPath ? (
        <Link to={`/${path}?page=${page}`}>
          <div className="pb-8 underline">Back</div>
        </Link>
      ) : null}
      <stateContext.Provider value={state}>
        <dispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/*" element={<Home path={path} page={page} setPageParam={setPageParam} search={search} />} />
            <Route path="/:username/:reponame/*" element={<SingleRepo setPath={setPath} search={search} />} />
          </Routes>
        </dispatchContext.Provider>
      </stateContext.Provider>
      <div className="text-center pt-20 lg:pt-24 pb-2 lg:pb-4">
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
