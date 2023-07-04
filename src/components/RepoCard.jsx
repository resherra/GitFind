import { FiExternalLink, FiMoreHorizontal } from "react-icons/fi"
import UserAvatar from "./UserAvatar"
import { useEffect } from "react"
import { useState } from "react"

export default function RepoCard({ reponame, repoUrl, desc, language, isSingle = false, contributors }) {
  const [cont, setCont] = useState([])
  const [isLonger, setIsLonger] = useState(false)

  useEffect(() => {
    if (contributors?.length > 6) {
      setCont(contributors?.slice(0, 6))
      setIsLonger(true)
    } else {
      setCont(contributors)
    }
  }, [contributors])

  return (
    <div className={`border-2 border-secColor hover:bg-secColor/30 rounded-3xl p-5 ` + `${isSingle ? `bg-secColor/30` : ``}`}>
      <div className="flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <p className="text-2xl">{reponame}</p>
          {isSingle ? (
            <a href={repoUrl} target="_blank">
              <FiExternalLink />
            </a>
          ) : (
            ""
          )}
        </div>
        {isSingle ? <div>{desc}</div> : null}
        <div className="flex justify-between items-center">
          <p className="text-xs text-brandBlue">{language}</p>
          {isSingle ? (
            <div className="flex gap-2 items-center">
              <div className="flex gap-2">{cont !== "" && cont?.map((acc) => <UserAvatar key={acc.id} userAvatar={acc.avatar_url} username={acc.login} />)}</div>
              {isLonger ? (
                <div className="bg-white/10 w-7 h-7 rounded-full flex justify-center items-center">
                  <FiMoreHorizontal />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
