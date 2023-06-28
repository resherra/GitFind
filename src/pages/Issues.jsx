import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"

export default function Issues({ username, reponame }) {
  const issuesQuery = useDetails(username, reponame, "issues")

  return (
    <Container>
      {issuesQuery.isLoading ? (
        "Loading..."
      ) : (
        <div>
          <ul className="flex flex-col gap-8">
            {issuesQuery.data?.map((issue) => (
              <li key={issue.id}>
                <DetailsCard author={issue.user.login} avatar={issue.user.avatar_url} body={issue.body} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  )
}
