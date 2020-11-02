import React, { useState } from "react"
import { ProjectsStyled } from "./ProjectsStyle"
import Project from "../Project/Project"
import useProyectosGrid from "../../hooks/useProyectosGrid"
const Projects = () => {
  const resultado = useProyectos()
  const [proyectos] = useState(resultado)
  return (
    <ProjectsStyled>
      <div className="wrapper">
        {proyectos.map(proyecto => (
          <Project key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </ProjectsStyled>
  )
}

export default Projects
