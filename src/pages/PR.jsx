import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"

export default function PR({ username, reponame }) {
  const pullsQuery = useDetails(username, reponame, "pulls")

  return (
    <Container>
      {pullsQuery.isLoading ? (
        "loading..."
      ) : (
        <ul className="flex flex-col gap-8">
          {pullsQuery.data?.map((pulls) => (
            <li key={pulls.id}>
              <DetailsCard author={pulls.user.login} avatar={pulls.user.avatar_url} body={pulls.body} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
