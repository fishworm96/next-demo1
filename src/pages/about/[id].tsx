import { InferGetStaticPropsType } from "next"

const About = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{posts}</div>
}

// 静态生成html
// 服务器函数
export const getStaticPaths = () => {
  const paths = ["1", "2", "3"].map((path) => ({params: {id: path}}))
  
  return {
    // 静态生成可访问的路径到html中，传给getStaticProps函数
    paths,
    // 只能访问返回的路径，不然会404
    // fallback: false
    // 生成第一次返回的路径到html中，允许请求中不存在的路径。客户端请求将更新，适合动态请求。
    fallback: true
    // 请求页面时如果数据未准备好就阻塞请求，会显示加载页面，等待页面渲染完毕后再返回页面。相比第二种情况，相当于免除了组件中判断这一环节。
    // fallback: "blocking"
  }
}

// 静态生成html
// 服务器函数
export const getStaticProps = (content: {params: string}[]) => {
  // 静态生成html
  return {
    props: {
      posts: "about"
    },
    // 重复生成时间，10秒重新请求一次
    revalidate: 10,
  }
}

export default About