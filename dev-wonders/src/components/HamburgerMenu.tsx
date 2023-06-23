import React from "react";

function HamburgerMenu() {
  return (
    <svg
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <path
            d="M4 18L20 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
  );
}

export default HamburgerMenu;
