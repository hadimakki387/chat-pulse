import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Link from "next/link";
import Image from "next/image";

function NavBar({ toggleSideBar }: { toggleSideBar: Function }) {
  return (
    <div className="NavBar">
      <div className="reveal">
        <Link href={"/"}>
          <Image
            width={50}
            height={50}
            alt="home"
            src="/house-solid-white.png"
          />
        </Link>
      </div>

      <div className="NavBarList">
        <ul className="flex LinksList">
          <div className="reveal">
            <li className="LinksListItems">
              <Link href={"/about"} className="Links">
                ABOUT
              </Link>
            </li>
          </div>
          <div className="reveal">
            <li className="LinksListItems">
              <Link href={"/projects"} className="Links">
                PROJECTS
              </Link>
            </li>
          </div>
          <div className="reveal">
            <li className="LinksListItems">
              <Link href={"/contactMe"} className="Links">
                CONTACT
              </Link>
            </li>
          </div>
        </ul>
      </div>
      <div
        className="HamburgerMenu "
        onClick={() => {
          toggleSideBar();
        }}
      >
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
