import { InferGetStaticPropsType } from "next"

const Post = ({ name }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(name)
  return <h1>{name}</h1>
}

export const getStaticProps = async () => {
  const result = await fetch("http://localhost:3000/api/hello")
  const data = await result.json()

  return {
    props: data
  }
}

export default Post