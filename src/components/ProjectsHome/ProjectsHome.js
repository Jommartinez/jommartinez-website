import React, { useState } from "react"
import { ProjectsHomeStyled } from "./ProjectsHomeStyle"
import Project from "../Project/Project"
import useProyectos from "../../hooks/useProyectosHome"
const ProjectsHome = () => {
  const resultado = useProyectos()
  const [proyectos] = useState(resultado)
  return (
    <ProjectsHomeStyled>
      <div className="wrapper">
        {proyectos.map(proyecto => (
          <Project key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </ProjectsHomeStyled>
  )
}

export default ProjectsHome
