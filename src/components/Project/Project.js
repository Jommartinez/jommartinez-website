import React from "react"
import { ProjectStyled } from "./ProjectStyle"
import imageProject from "../../images/project.jpg"
import { Link } from "gatsby"

const Project = ({ proyecto }) => {
  const { slug, titulo } = proyecto
  return (
    <ProjectStyled>
      <Link to={`https://distracted-fermat-b7befd.netlify.app/${slug}`}>
        <img src={imageProject} alt={slug} />
        <div className="cover">
          <div className="mask"></div>
          <div className="content">
            <p>
              desarrollo web
              <span>{titulo}</span>
            </p>
          </div>
        </div>
      </Link>
    </ProjectStyled>
  )
}

export default Project
