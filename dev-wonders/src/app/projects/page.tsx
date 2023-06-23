"use client";

import Cursor from "@/components/Cursor";
import NavBar from "@/components/Home/NavBar";
import ProjectsLogic from "@/components/Projects/ProjectsLogic";
import NextButton from "@/components/NextButton";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import { useEffect, useState } from "react";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import SideBar from "@/components/SideBar";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const handleProjectSelect = ({ project }: { project: any }) => {
    setSelectedProject(project);
  };
  function setNull() {
    setSelectedProject(null);
  }
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
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <div className={selectedProject ? "opacity-20" : ""}>
        <Cursor />

        <NavBar toggleSideBar={toggleSideBar} />

        <div className="Projects">
          <div className="reveal">
            <h1 className="ProjectTitle">Projects.</h1>
          </div>

          <ProjectsLogic onProjectSelect={handleProjectSelect} />
          <div className="reveal">
            <NextButton URI="/resume" Content="Lets Go To My Resume." />
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={selectedProject ? "ProjectInfo" : ""}>
        {selectedProject && (
          <ProjectInfo project={selectedProject} setNull={setNull} />
        )}
      </div>
    </div>
  );
}

export default Projects;
