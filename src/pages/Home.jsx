import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

export default function Home() {
  const [user, setUser] = useState("")

  const userQuery = useQuery(
    ["user", "repos"],
    async () => {
      const res = await axios.get(`/users/${user}`)

      return res.data
    },
    {
      enabled: false,
      staleTime: Infinity,
    }
  )

  return (
    <>
      <h1>welcode to GiiitFing</h1>
      <h3>search for a user, navigate repos...</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          userQuery.refetch()
        }}
      >
        <label htmlFor="search">search for a user:</label>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <button type="submit">search</button>
      </form>

      {userQuery.fetchStatus === "idle" && userQuery.isLoading ? null : userQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <div>{userQuery.data.login}</div>
          <div>{userQuery.data.bio}</div>
        </>
      )}
    </>
  )
}
