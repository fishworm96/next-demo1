import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";

const Login = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading"
  const router = useRouter()

  if (loading) {
    return <p>Loading...</p>;
  }

  if (session) {
    router.replace("/")
  }

  return (
    <div>
      {session
        ? (null)
        : (<button onClick={() => signIn()}>Sign In</button>)}
    </div>
  );
};

export default Login;