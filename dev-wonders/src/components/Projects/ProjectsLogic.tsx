import Image from "next/image";
import React from "react";

function ProjectsLogic({ onProjectSelect }: { onProjectSelect: Function }) {
  const Projects = [
    {
      name: "Tiktok Agency",
      excerpt: "Landing Page for a Tiktok Agency",
      description:
        "The TikTok agency's landing page is a responsive and visually captivating website built using Next.js, React.js, and CSS. With its mobile-friendly design and intuitive navigation, the page showcases the agency's expertise in leveraging TikTok's platform for successful marketing campaigns. Through compelling visuals, interactive elements, and clear calls-to-action, the landing page creates an immersive experience, effectively communicating the agency's value proposition and engaging visitors across devices.",
      technologies: ["NextJs","ReactJs", "Css3"],
      img: "tiktok-agency.png",
      githubLink: "https://github.com/hadimakki387/marketing-agnce-landing-page",
      link:"https://tiktok-agency.netlify.app/"
    },
    {
      name: "walkie",
      excerpt: "Dog walking Service website",
      description:
        "In the Walkie web application, I utilized several technologies to build its functionality. For the backend, I employed Node.js along with the Express.js framework, which allowed me to create robust and efficient server-side logic. MongoDB served as the database, enabling seamless storage and retrieval of data related to user profiles, dog walkers, and other essential information. On the frontend, I leveraged HTML for structuring the web pages and used Tailwind CSS for styling, providing a sleek and modern user interface. This combination of technologies empowered Walkie to offer a user-friendly platform for connecting dog owners with professional dog walkers, streamlining the process of booking and managing dog walking services.",
      technologies: ["nodeJs", "expressJs", "ejs", "mongoDB", "TailwindCss"],
      img: "walkie.png",
      githubLink: "https://github.com/hadimakki387/Walkie",
      
    },
    {
      name: "Plan Selecting Page",
      excerpt: "A plan for selecting gaming plans",
      description:
        "This project is about selecting gaming Plan, and giving the last Prices in the last page ,I used in this project ReactJs and Css to create a user friendly and responsive One-Page website",
      technologies: ["ReactJs", "Css3"],
      img: "PlanSelectingPage.png",
      githubLink: "https://github.com/hadimakki387/login-page",
    },
    {
      name: "Realify 'COMING SOON'",
      excerpt: "A real estate website ",
      description:
        "Realify is a web application built using Laravel, Tailwind CSS, and MySQL. The aim of Realify is to provide a seamless platform for real estate enthusiasts to explore property listings and connect with potential buyers and sellers. Leveraging the power of Laravel, I will implement robust backend functionality to handle user authentication, property data management, and search functionalities. The user interface will be crafted with the help of Tailwind CSS, ensuring a modern and responsive design that adapts well to different devices. By integrating MySQL as the database, Realify will efficiently store and retrieve property information. With this project, I aim to showcase my proficiency in Laravel, Tailwind CSS, and database management while delivering a user-friendly and visually appealing real estate platform.",
      technologies: ["Laravel", "TailwindCss", "html", "JavaScript"],
      img: "Realify.png",
      githubLink: "https://github.com/hadimakki387/Realify",
    },
  ];

  return (
    <div className="reveal">
      {Projects.map((project, index) => (
       
        <div
          className=""
          onClick={() => onProjectSelect(project)}
          key={index}
        >
          
          <figure className="projectFigure">
            <Image
              className="ProjectImg"
              width={1920}
              height={1080}
              src={"/" + project.img}
              alt="sample99"
            />
            <figcaption>
              <h3 className="ProjectTitle">{project.name}</h3>
              <h4 className="ProjectExcerpt">{project.excerpt}</h4>
              <br />
              <div className="TechnologiesDiv">
                {project.technologies.map((technology, index) => (
                  <h4 className="Technologies" key={index}>
                    {technology}
                  </h4>
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default ProjectsLogic;
