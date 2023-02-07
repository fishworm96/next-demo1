import { GetServerSideProps, InferGetServerSidePropsType, NextApiRequest, NextApiResponse } from "next"

const ServerSide = ({ message }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{message}</div>
}

// 不会生成html，这个函数只会请求数据，如同react中fetch获取api数据。
// 服务端函数
export const getServerSideProps = ({ params, req, res }: { req: NextApiRequest, res: NextApiResponse, params: any }) => {
  const { id } = params
  return {
    props: { message: `Next.js is awesome${id}` }
  }
}

export default ServerSide