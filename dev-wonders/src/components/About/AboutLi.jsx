import React from "react";

function AboutLi() {
  const Li = [
    {
      title: "The Complete 2022 Web Development Bootcamp.",
      body: "Sure. The Complete 2022 Web Development Bootcamp is an online course that teaches you how to build websites and web applications using HTML, CSS, and JavaScript. The course is taught by Angela Yu, a popular instructor on Udemy.",
      date: 2022,
      source: "Udemy",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    },
    {
      title: "Laracast.",
      body: "Laracasts is a video tutorial platform created by Jeffrey Way, the creator of the Laravel PHP framework. Laracasts offers a wide range of video tutorials on Laravel, covering everything from the basics to advanced topics.",
      date: 2023,
      source: "Laracast",
      link: "https://laracasts.com/",
    },
    {
      title: "Learning Something Great 😉",
      body: "We continue learning everyday.",
      date: "Currently",
      source: "",
    },
  ];

  return Li.map((item, index) => (
    <div className="reveal" key={index}>
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
