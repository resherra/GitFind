import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"
import React from "react"
import LoadButton from "../components/LoadButton"

export default function Commits({ username, reponame }) {
  const commitsQuery = useDetails(username, reponame, "commits")

  return (
    <Container>
      {commitsQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <ul className="flex flex-col gap-8 ">
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
          {commitsQuery.data?.pages[0].length !== 0 ? (
            <div className="self-center pt-28">
              <LoadButton query={commitsQuery} />
            </div>
          ) : (
            <div>This repo has no commits!</div>
          )}
        </>
      )}
    </Container>
  )
}
