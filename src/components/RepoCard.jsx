import { FiExternalLink, FiMoreHorizontal } from "react-icons/fi"
import UserAvatar from "./UserAvatar"
import { useEffect } from "react"
import { useState } from "react"
import { RiStarSLine } from "react-icons/ri"
import { VscRepoForked } from "react-icons/vsc"

export default function RepoCard({ reponame, repoUrl, desc, language, isSingle = false, contributors, forksCount, starsCount }) {
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
    <div className={`border md:border-2 border-secColor hover:bg-secColor/30 rounded-2xl md:rounded-3xl p-3 md:p-5 ` + `${isSingle ? `bg-secColor/30 h-44 md:h-64` : `h-32 md:h-40`}`}>
      <div className="flex flex-col h-full justify-between">
        <div className="flex justify-between items-center">
          <p className="text-base md:text-2xl">{reponame}</p>
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
          {!isSingle && (
            <div className="flex gap-4 md:gap-6 text-xs">
              {starsCount > 0 && (
                <div className="flex items-center gap-2">
                  <RiStarSLine />
                  <div>{starsCount}</div>
                </div>
              )}
              {forksCount > 0 && (
                <div className="flex items-center gap-2">
                  <VscRepoForked />
                  <div>{forksCount}</div>
                </div>
              )}
            </div>
          )}
          {isSingle ? (
            <div className="flex gap-1 md:gap-2 items-center">
              <div className="flex gap-1 md:gap-2">{cont !== "" && cont?.map((acc) => <UserAvatar key={acc.id} userAvatar={acc.avatar_url} username={acc.login} />)}</div>
              {isLonger ? (
                <div className="bg-white/10 w-4 h-4 md:w-7 md:h-7 rounded-full flex justify-center items-center">
                  <FiMoreHorizontal className="w-2" />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
