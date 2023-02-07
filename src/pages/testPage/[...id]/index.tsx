import { useRouter } from "next/router"
import classes from "./slug.module.css"

const Slug = () => {
  const router = useRouter()
  const { id } = router.query
  console.log(id, router.pathname)

  return <div className={classes.slug}>{id}</div>
}

export default Slug