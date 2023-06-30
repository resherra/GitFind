import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"
import React from "react"

export default function Commits({ username, reponame }) {
  const commitsQuery = useDetails(username, reponame, "commits")

  return (
    <Container>
      {commitsQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {commitsQuery.data?.pages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {page.map((commit) => (
                    <li key={commit.sha}>
                      <DetailsCard author={commit.author?.login} avatar={commit.author?.avatar_url} body={commit.commit?.message} />
                    </li>
                  ))}
                </React.Fragment>
              )
            })}
          </ul>
          <button onClick={() => commitsQuery.fetchNextPage()} disabled={commitsQuery.isFetchingNextPage && !commitsQuery.hasNextPage} className="bg-secColor w-28 px-3 py-2 rounded-xl">
            {commitsQuery.isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </>
      )}
    </Container>
  )
}
