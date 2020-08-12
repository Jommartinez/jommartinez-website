import React from "react"
import { ProjectStyled } from "./ProjectStyle"
import imageProject from "../../images/project.jpg"

function Project() {
  return (
    <ProjectStyled>
      <img src={imageProject} alt="cabecera de sección" />
      <div className="cover">
        <div className="mask"></div>
        <div className="content">
          <p>
            desarrollo web
            <span>LG Electrónica</span>
          </p>
        </div>
      </div>
    </ProjectStyled>
  )
}

export default Project
