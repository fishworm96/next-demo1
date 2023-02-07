import Link from "next/link"

const NestedLayout = () => {
  return (
    <nav>
      <input placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default NestedLayout