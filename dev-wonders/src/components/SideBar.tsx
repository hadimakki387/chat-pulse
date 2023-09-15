"use client"
import { keyframes } from "@emotion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Reveal } from "react-awesome-reveal";



function SideBar({toggleSideBar,sideBar}:{toggleSideBar:Function,sideBar:Boolean}) {
  useEffect(() => {
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          setTimeout(()=>{
            element.classList.add('active');
          },700)
          
        } else {
          element.classList.remove('active');
        }
      });
    }

    // Add scroll event listener
    window.addEventListener('scroll', reveal);

    // Cleanup: remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -25%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`

const [showSideBar,setShowSideBar] = useState("")

useEffect(()=>{
  if(sideBar===true){
  setShowSideBar("ShownSideBar")
}else{
  setShowSideBar("")
}
},[sideBar])



  return (
    <div>
     
        <div className={"SideBar " + showSideBar}>
          <div className="NavBarListMobile">
            
            <Reveal keyframes={customAnimation} cascade duration={500} delay={300}>
              <div className="">
                
                  <Link
                  href={"/about"}
                  className="Links decorationNone alignCenter"
                >
                  about
                </Link>
                

                
                
                <button className="XButton" onClick={()=>{toggleSideBar()}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                </button>
              </div>
              <div className="">
                <Link href={"/projects"} className="Links">
                  PROJECTS
                </Link>
              </div>
              <div className="">
                <Link href={"/contactMe"} className="Links">
                  CONTACT
                </Link>
              </div>
              </Reveal>
          </div>
        </div>
   
    </div>
  );
}

export default SideBar;
