import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SingleRepo from "./pages/SingleRepo"
import Commits from "./pages/Commits"
import Issues from "./pages/Issues"
import PR from "./pages/PR"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:reponame" element={<SingleRepo />}>
          <Route path="commits" element={<Commits />} />
          <Route path="PR" element={<PR />} />
          <Route path="issues" element={<Issues />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
