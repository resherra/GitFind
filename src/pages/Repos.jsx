export default function Repos({ user }) {
  return (
    <>
      {/* {reposQuery.fetchStatus === "idle" && reposQuery.isLoading ? null : reposQuery.isLoading ? (
        "loading..."
      ) : (
        <div className="flex gap-36">
          <User username={reposQuery.data[1]?.owner.login} userAvatar={reposQuery.data[1]?.owner.avatar_url} />
          <ul className="w-full">
            {
              <li>
                <div className="flex flex-col gap-8">
                  {reposQuery.data.map((repo) => (
                    <Link key={repo.node_id} to={`/${repo.owner.login}/${repo.name}`}>
                      <RepoCard reponame={repo.name} />
                    </Link>
                  ))}{" "}
                </div>
              </li>
            }
          </ul>
        </div>
      )} */}
      <h2>this is repos list by {user}</h2>
    </>
  )
}
