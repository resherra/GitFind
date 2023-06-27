import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"

export default function Commits({ username, reponame }) {
  const commitsQuery = useQuery(["repo", reponame, "commits"], async () => {
    const res = await axios.get(`/repos/${username}/${reponame}/commits`)

    return res.data
  })

  return (
    <Container>
      {commitsQuery.isLoading ? (
        "loading..."
      ) : (
        <ul className="flex flex-col gap-8">
          {commitsQuery.data?.map((commit) => (
            <li key={commit.sha}>
              <DetailsCard author={commit.author?.login} avatar={commit.author?.avatar_url} body={commit.commit?.message} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
