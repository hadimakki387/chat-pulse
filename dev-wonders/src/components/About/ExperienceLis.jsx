import React from "react";

function AboutLi() {
  const Li = [
    
    {
      title: "XpertBot",
      body: "8+ months actual working experience creating projects using laravel as a backend framework and vue as a frontend framework",
      date: "Currently",
      source: "",
    },
  ];

  return Li.map((item, index) => (
    <div className="" key={index}>
      <li id={index} className="AboutLi">
        <div className="TitleAndEndDate">
          <a
            target="_blank"
            rel="noopener noreferrer"
            id="cardHover"
            aria-label="Open Human Centered Design 101"
            href={item.link}
            className="TitleLink"
          >
            {item.title}
            <small>{item.source}</small>
          </a>
          <a href="/" tabindex="-1">
            <b>{item.date}</b>
          </a>
        </div>

        <p className="AboutBody">{item.body}</p>
      </li>
    </div>
  ));
}

export default AboutLi;
