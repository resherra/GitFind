import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"
import { useMatch } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })
  const isReposPath = useMatch({ path: "/:username", end: true })
  const [path, setPath] = useState("")

  return (
    <>
      {!isRootPath && !isReposPath ? (
        <Link to={`/${path}`}>
          <div className="pb-8 underline">Back</div>
        </Link>
      ) : null}
      <Routes>
        <Route path="/*" element={<Home path={path} />} />
        <Route path="/:username/:reponame/*" element={<SingleRepo setPath={setPath} />} />
      </Routes>
      <div className="text-center pt-20 pb-4">Built with React, React Query, Tailwindcss</div>
    </>
  )
}

export default App
