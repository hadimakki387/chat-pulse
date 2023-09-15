"use client"
import React, { useEffect } from "react";
import NavBar from "../../components/Home/NavBar";

import ReadsLis from "../../components/About/ReadsLis";
import ExperienceLis from "../../components/About/ExperienceLis.jsx";
import Cursor from "../../components/Cursor";
import NextButton from "../../components/NextButton";
import SocialMediaLinks from "../../components/Home/SocialMediaLinks";
import SideBar from "../../components/SideBar";
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

function About() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
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
    <div className="gradient AboutBody ">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <Cursor />
        <NavBar toggleSideBar={toggleSideBar} />
        <div className="reveal">
          <h1 className="AboutTitle">About Me.</h1>
        </div>
        
        <article className="AboutArticle reveal">
        <div className="">
          <h4 className="">My Reads.</h4>
          </div>
          
          <ul className="timeline AboutUl">
            <ReadsLis />
          </ul>
        <div className="">
          <h4 className="">My Experiences.</h4>
          </div>
          
          <ul className="timeline AboutUl">
            <ExperienceLis/>
          </ul>
            <div className="">
              <NextButton URI="/projects" Content="Lets Continue To Projects" />
              <div className="WindowsSocialMediaDiv">
                <SocialMediaLinks />
              </div>
            </div>
        </article>
        
    </div>
  );
}

export default About;
