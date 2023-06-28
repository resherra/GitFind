import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"
import { useMatch } from "react-router-dom"
import { Link } from "react-router-dom"

function App() {
  const isRootPath = useMatch({ path: "/", end: true })

  return (
    <>
      {!isRootPath && (
        <Link to="/">
          <div className="pb-8 underline">Home</div>
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username/:reponame/*" element={<SingleRepo />} />
      </Routes>
      <div className="text-center pt-20 pb-4">Built with React, React Query, Tailwindcss</div>
    </>
  )
}

export default App
