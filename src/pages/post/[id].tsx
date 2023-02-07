import { useRouter } from "next/router"

const PostId = () => {
  const router = useRouter()
  const { id } = router.query

  return <h1>{id}</h1>
}

export default PostId