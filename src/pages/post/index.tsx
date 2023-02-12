import { InferGetStaticPropsType } from "next"

const Post = ({ name }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(name)
  return <h1>{name}</h1>
}

export const getStaticProps = async () => {
  const result = await fetch("http://localhost:3000/api/hello")
  const data = await result.json()

  if (data) {
    // return {
    //   // 为true是将会跳转到404页面
    //   notFound: true
    // }
    return {
      // 重定向
      // destination的值为需要跳转的页面路径
      redirect: {
        destination: "/",
        // permanent标识是否永久性
        // 永久性重定向：搜索引擎机器人会在遇到该状态码时触发更新操作，在其索引库中修改与该资源相关的 URL 。
        // 临时性重定向：搜索引擎不会记录该新的、临时的链接。
        permanent: false
      }
    }
  }

  return {
    props: data
  }
}

export default Post