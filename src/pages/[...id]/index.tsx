import { useRouter } from "next/router"

const Slug = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id, router.pathname)

  return <div>{id}</div>
}

export default Slug