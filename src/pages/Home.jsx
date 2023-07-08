import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Repos from "./Repos"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export default function Home({ path, page, setPageParam, search }) {
  const navigate = useNavigate()
  const [user, setUser] = useState(path)
  const route = useParams()["*"]

  useEffect(() => {
    setUser(route)
  }, [route])

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="text-center pb-20">
          <header className="pb-20">
            <h1 className="text-3xl font-semibold pb-5">Git Find</h1>
            <h3 className="text-xl font-semibold">Look up a GitHub user and explore their profile...</h3>
          </header>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              navigate(`/${user}`)
            }}
            className="flex flex-row justify-between"
          >
            <input className="bg-transparent border-2 border-secColor rounded-full px-4 py-2 mr-4 w-full" value={user} type="text" onChange={(e) => setUser(e.target.value)} />
            <button className=" bg-secColor text-textColor rounded-full px-6 py-2" type="submit">
              Search
            </button>
          </form>
        </div>

        <Routes>
          <Route path="/:username" element={<Repos search={search} page={page} setPageParam={setPageParam} />} />
        </Routes>
      </div>
    </>
  )
}
