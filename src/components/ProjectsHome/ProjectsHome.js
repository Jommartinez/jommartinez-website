import React from "react"
import { ProjectsHomeStyled } from "./ProjectsHomeStyle"
import Project from "../Project/Project"

function ProjectsHome() {
  return (
    <ProjectsHomeStyled>
      <div className="wrapper">
        <Project />
        <Project />
        <Project />
      </div>
    </ProjectsHomeStyled>
  )
}

export default ProjectsHome
