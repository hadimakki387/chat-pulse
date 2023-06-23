import Image from "next/image";
import React from "react";


function ProjectsLogic({ onProjectSelect }) {
  const Projects = [
    {
      name: "Dev Wonders",
      excerpt: "My own Portfolio website",
      description:
        "My portfolio website, built using React and CSS, is a visually appealing showcase of my skills and projects. It offers a clean and modern design, responsive layout, and intuitive navigation. Visitors can explore my professional background, view my notable projects with descriptions and technologies used, and easily get in touch with me through the contact section. The website serves as a concise representation of my abilities and aims to leave a lasting impression on potential clients and collaborators.",
      technologies: ["ReactJs", "Css3"],
      img: "DevWonders.png",
      Link: "https://github.com/hadimakki387/MyPortfolieWebsite",
    },
    {
      name: "walkie",
      excerpt: "Dog walking Service website",
      description:
        "In the Walkie web application, I utilized several technologies to build its functionality. For the backend, I employed Node.js along with the Express.js framework, which allowed me to create robust and efficient server-side logic. MongoDB served as the database, enabling seamless storage and retrieval of data related to user profiles, dog walkers, and other essential information. On the frontend, I leveraged HTML for structuring the web pages and used Tailwind CSS for styling, providing a sleek and modern user interface. This combination of technologies empowered Walkie to offer a user-friendly platform for connecting dog owners with professional dog walkers, streamlining the process of booking and managing dog walking services.",
      technologies: ["nodeJs", "expressJs", "ejs", "mongoDB", "TailwindCss"],
      img: "walkie.png",
      Link: "https://github.com/hadimakki387/Walkie",
    },
    {
      name: "Plan Selecting Page",
      excerpt: "A plan for selecting gaming plans",
      description:
        "This project is about selecting gaming Plan, and giving the last Prices in the last page ,I used in this project ReactJs and Css to create a user friendly and responsive One-Page website",
      technologies: ["ReactJs", "Css3"],
      img: "PlanSelectingPage.png",
      Link: "https://github.com/hadimakki387/login-page",
    },
    {
      name: "Realify 'COMING SOON'",
      excerpt: "A real estate website ",
      description:
        "Realify is a web application built using Laravel, Tailwind CSS, and MySQL. The aim of Realify is to provide a seamless platform for real estate enthusiasts to explore property listings and connect with potential buyers and sellers. Leveraging the power of Laravel, I will implement robust backend functionality to handle user authentication, property data management, and search functionalities. The user interface will be crafted with the help of Tailwind CSS, ensuring a modern and responsive design that adapts well to different devices. By integrating MySQL as the database, Realify will efficiently store and retrieve property information. With this project, I aim to showcase my proficiency in Laravel, Tailwind CSS, and database management while delivering a user-friendly and visually appealing real estate platform.",
      technologies: ["Laravel", "TailwindCss", "html", "JavaScript"],
      img: "Realify.png",
      Link: "https://github.com/hadimakki387/Realify",
    },
  ];

  const handleProjectClick = (project) => {
    onProjectSelect(project);
  };
  


  return (
    <div>
        {Projects.map((project, index) => (
        
          <div className="reveal" onClick={() => handleProjectClick(project)} key={index}>
            <figure className="projectFigure">
              <Image className="ProjectImg" width={2000} height={2000} src={"/"+project.img} alt="sample99"  />
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
