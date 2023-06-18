import { SignedIn, SignedOut, UserButton, useAuth, useClerk, useUser } from "@clerk/clerk-react"
import { useEffect } from "react"
import axios from "axios"

function SignInButton() {
  const clerk = useClerk()

  return <button onClick={() => clerk.openSignIn({})}>Sign in</button>
}

function Header() {
  return (
    <header>
      <nav>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  )
}

export default Header
