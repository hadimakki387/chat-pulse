import ChatSideBar from "components/ChatSideBar/ChatSideBar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-full grid-cols-[250px_1fr]">
        <ChatSideBar/>
        <div className="grid grid-rows-[1fr_100px] bg-gray-700">
          <div>hello</div>
          <footer className="bg-gray-800 p-10">nigger</footer>
        </div>
      </div>
    </div>
  );
}
