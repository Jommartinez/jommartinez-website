import React from "react"
import { ProjectStyled } from "./ProjectStyle"
import imageProject from "../../images/project.jpg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ proyecto }) => {
  const { slug, titulo, categoria } = proyecto
  return (
    <ProjectStyled>
      <AniLink paintDrip hex="#f5b133" to={`/${slug}`}>
        <img src={imageProject} alt={slug} />
        <div className="cover">
          <div className="mask"></div>
          <div className="content">
            <p>
              {categoria}
              <span>{titulo}</span>
            </p>
          </div>
        </div>
      </AniLink>
    </ProjectStyled>
  )
}

export default Project
