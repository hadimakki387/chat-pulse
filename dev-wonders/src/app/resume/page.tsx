"use client";
import Cursor from "@/components/Cursor";

import NextButton from "@/components/NextButton";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Home/NavBar";

function Resume() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    let index = 0;

    function reveal() {
      if (index === reveals.length) {
        return;
      }

      setTimeout(() => {
        reveals[index].classList.add("active");
        index++;
        reveal();
      }, 200);
    }

    reveal();
  }, []);
  return (
    <div className="">
      <Cursor />
      <NavBar toggleSideBar={toggleSideBar} />

      <div className="ResumeBody">
        <div className="reveal">
          <h1 className="ResumeTitle">Resume.</h1>
        </div>
        <div className="reveal">
          <p className="ResumeText">
            Reach out to me via my{" "}
            <Link className="contactLink" href={"/contact"}>
              Contact Page
            </Link>{" "}
            or{" "}
            <a href="MyCv.pdf" className="ContactLink" download>
              Download
            </a>{" "}
            the resume
          </p>
        </div>
        <div className="reveal">
          <div className="resumeImgDiv">
            <Image
              height={1000}
              width={1000}
              src="/Cv.png"
              alt="Cv"
              className="resumeImg"
            />
          </div>
        </div>
        <div className="reveal">
          <div>
            <NextButton
              Content="Are you convinced to contact me now ?"
              URI="/ContactMe"
            />
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
