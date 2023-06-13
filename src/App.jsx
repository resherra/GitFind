import { SignedIn, SignedOut, UserButton, useClerk, useAuth, useUser } from "@clerk/clerk-react"

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
