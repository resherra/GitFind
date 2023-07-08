import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"
import React from "react"
import LoadButton from "../components/LoadButton"
import DetailsSkel from "../components/skeleton/DetailsSkel"

export default function Issues({ username, reponame }) {
  const issuesQuery = useDetails(username, reponame, "issues")

  return (
    <Container>
      {issuesQuery.isLoading ? (
        <DetailsSkel />
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {issuesQuery.data?.pages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {page.map((issue) => (
                    <li key={issue.id}>
                      <DetailsCard author={issue.user.login} avatar={issue.user.avatar_url} body={issue.body} detailUrl={issue.html_url} />
                    </li>
                  ))}
                </React.Fragment>
              )
            })}
          </ul>
          {issuesQuery.data?.pages[0].length !== 0 ? (
            <div className="self-center pt-28">
              <LoadButton query={issuesQuery} />
            </div>
          ) : (
            <div>This repo has no issues!</div>
          )}
        </>
      )}
    </Container>
  )
}
