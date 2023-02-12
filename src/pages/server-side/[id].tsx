import { GetServerSideProps, InferGetServerSidePropsType, NextApiRequest, NextApiResponse } from "next"

const ServerSide = ({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{message}</div>
}

// 不会生成html，这个函数只会请求数据，如同react中fetch获取api数据。
// 服务端函数
export const getServerSideProps = ({ params, req, res }: { req: NextApiRequest, res: NextApiResponse, params: any }) => {
  const { id } = params
  if (id) {
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
    props: { message: `Next.js is awesome${id}` }
  }
}

export default ServerSide