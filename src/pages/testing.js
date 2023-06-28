const commitsQuery = useQuery(["repo", reponame, "commits"], async () => {
  const res = await axios.get(`/repos/${username}/${reponame}/commits`)

  return res.data
})

const issuesQuery = useQuery(["repo", reponame, "issues"], async () => {
  const res = await axios.get(`/repos/${username}/${reponame}/issues`)

  return res.data
})

const pullsQuery = useQuery(["repo", reponame, "pulls"], async () => {
  const res = await axios.get(`/repos/${username}/${reponame}/pulls`)

  return res.data
})
