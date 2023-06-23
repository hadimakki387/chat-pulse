import Link from "next/link";
import React from "react";



function SideBar({toggleSideBar,sideBar}:{toggleSideBar:Function,sideBar:Boolean}) {

  return (
    <div>
      {sideBar ? (
        <div className="SideBar">
          <div className="NavBarListMobile">
            
              <div className="">
                <Link
                  href={"/about"}
                  className="Links decorationNone alignCenter"
                >
                  about
                </Link>
                <button className="XButton" onClick={()=>{toggleSideBar()}}>
                <i className="fa-light fa-x"></i>
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
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SideBar;
