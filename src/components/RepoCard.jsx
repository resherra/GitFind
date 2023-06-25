export default function RepoCard({ reponame }) {
  return (
    <div className={`border-2 border-secColor hover:bg-secColor/30 rounded-3xl p-5`}>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-10">
          <p className="text-2xl">{reponame}</p>
          <p className="text-xs text-brandBlue">Javascript</p>
        </div>
        <div className="bg-brandBlue rounded-full w-6 h-6"></div>
      </div>
    </div>
  )
}
