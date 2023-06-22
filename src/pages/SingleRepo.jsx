import { Link, Outlet } from "react-router-dom"

export default function SingleRepo() {
  return (
    <>
      <h2>single repo</h2>

      <nav>
        <Link to="commits">commits</Link>
        <Link to="PR">PR</Link>
        <Link to="issues">issues</Link>
      </nav>

      <Outlet />
    </>
  )
}
