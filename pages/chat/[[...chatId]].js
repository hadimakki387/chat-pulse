import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-full grid-cols-[250px_1fr]">
          <div className="">
          side bar
          </div>
          <div className="bg-gray-700 grid grid-rows-[1fr_100px]">
            <div>
              hello
            </div>
            <footer className="bg-gray-800 p-10">
              nigger
            </footer>
          </div>
      </div>
    </div>
  );
}
