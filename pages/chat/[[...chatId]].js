import ChatSideBar from "components/ChatSideBar/ChatSideBar";
import Head from "next/head";
import { useState } from "react";

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div className="h-screen w-full">
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-full grid-cols-[250px_1fr]">
        <ChatSideBar />
        <div className="grid grid-rows-[1fr_100px] bg-gray-700">
          <div>hello</div>
          <footer className="bg-gray-800 p-7">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  placeholder="Send a message ..."
                  className="w-full resize-none rounded-md bg-gray-700  text-white focus:border-emerald-500  focus:outline focus:outline-emerald-500"
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button type="submit" className="btn">
                  send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}
