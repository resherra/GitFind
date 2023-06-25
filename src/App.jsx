import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"

function App() {
  // const isRootPath = useMatch({ path: "/", end: true })

  return (
    <>
      {/* {!isRootPath && <Link to="/">Home</Link>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username/:reponame/*" element={<SingleRepo />} />
      </Routes>
      <div className="text-center pt-20 pb-4">Built with React, React Query, Tailwindcss</div>
    </>
  )
}

export default App
