import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import SignInPage from "./components/SignInPage";
import { getSession } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="h-[100vh] w-full bg-slate-900 text-white">
      <Head>
        <title>Chat Pulse - Login or Signup</title>
      </Head>
      {!user&&<SignInPage/>}
      {!!user&&<Link href={"api/auth/logout"}>Logout</Link>}
      
    </div>
  );
}

//server side prop function
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  if (!!session) {
    return {
      redirect: {
        destination: "/chat",
      },
    };
  }
  return {
    props: {},
  };
};
