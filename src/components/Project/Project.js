import React from "react"
import { ProjectStyled } from "./ProjectStyle"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Project = ({ proyecto }) => {
  const { slug, titulo, categoria, featured_media } = proyecto
  return (
    <ProjectStyled>
      <AniLink paintDrip hex="#f5b133" to={`/${slug}`}>
        <Img
          alt={featured_media.alt_text}
          fluid={featured_media.localFile.childImageSharp.fluid}
        />
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
