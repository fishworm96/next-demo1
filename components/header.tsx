import { signOut } from "next-auth/react"

const Header = () => {
  return (
    <div>
      <div className="header">header
        <button onClick={() => signOut()}>Sign Out</button>
      </div>

    </div>
  )
}

export default Header