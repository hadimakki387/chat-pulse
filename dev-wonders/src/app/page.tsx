"use client";
import React, { useEffect, useState } from "react";
import NavBar from "../components/Home/NavBar";
import Introduction from "../components/Home/Introduction";
import Cursor from "../components/Cursor";
import SideBar from "../components/SideBar";

function Home() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
  
    let index = 0;
  
    function reveal() {
      if (index === reveals.length) {
        return;
      }
  
      setTimeout(() => {
        reveals[index].classList.add('active');
        index++;
        reveal();
      }, 200);
    }
  
    reveal();
  }, []);
  

  return (
    <div className="gradient ">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />

      <Cursor />
      <NavBar toggleSideBar={toggleSideBar} />
      <Introduction />
    </div>
  );
}

export default Home;
