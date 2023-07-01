import DetailsCard from "../components/DetailsCard"
import Container from "../components/Container"
import useDetails from "../helpers/useDetails"
import React from "react"
import LoadButton from "../components/LoadButton"

export default function PR({ username, reponame }) {
  const pullsQuery = useDetails(username, reponame, "pulls")

  return (
    <Container>
      {pullsQuery.isLoading ? (
        "loading..."
      ) : (
        <>
          <ul className="flex flex-col gap-8">
            {pullsQuery.data?.pages.map((page, index) => {
              return (
                <React.Fragment key={index}>
                  {page.map((pull) => (
                    <li key={pull.id}>
                      <DetailsCard author={pull.user.login} avatar={pull.user.avatar_url} body={pull.body} />
                    </li>
                  ))}
                </React.Fragment>
              )
            })}
          </ul>
          <div className="self-center pt-28">
            <LoadButton query={pullsQuery} />
          </div>
        </>
      )}
    </Container>
  )
}
