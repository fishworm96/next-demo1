import { InferGetStaticPropsType } from "next"

const About = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{posts}</div>
}

// 服务器函数
export const getStaticProps = () => {
  // const data = fetch("api").then(res => res.json()).then()
  // if (!data) {
  //   return {
  //     // 为true时跳转到404
  //     notFound: true
  //   }
  // }
  // 静态生成
  return {
    props: {
      posts: "about"
    },
    // 重复生成时间，10秒重新请求一次
    revalidate: 10,
  }
}

export default About