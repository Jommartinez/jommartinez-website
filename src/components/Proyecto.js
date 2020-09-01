import React from "react"
import Layout from "./Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import HeroTextProject from "./HeroTextProject"
import BgWhitoutTitle from "./BgWhitoutTitle"
import TextBlock from "./TextBlock"
import TextBlockProject from "./TextBlockProject"
import TextBlockPb0 from "./TextBlockPb0"
import ImagesProjectStyled from "./ImagesProject/ImagesProject"
export const query = graphql`
  query($slug: String!) {
    allWordpressWpJmProyectos(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        acf {
          category
          client
          detail
          technologies
          url
          project_image_one {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 1510) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          project_images {
            image {
              id
              alt_text
              localFile {
                childImageSharp {
                  fluid(maxWidth: 755) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }

          cover_image {
            alt_text
            localFile {
              childImageSharp {
                fluid(maxWidth: 2560) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        content
      }
    }
  }
`
const Proyecto = ({
  data: {
    allWordpressWpJmProyectos: { nodes, edges },
  },
}) => {
  const { title, content, acf } = nodes[0]
  return (
    <Layout>
      <HeroTextProject>
        <h1
          className="title-project"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="category-project">{acf.category}_</p>
      </HeroTextProject>
      <BgWhitoutTitle
        image={acf.cover_image.localFile.childImageSharp.fluid.src}
        alt={acf.cover_image.alt_text}
      />
      <TextBlockPb0>
        <div
          className="description-project"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </TextBlockPb0>
      <TextBlockProject>
        <center>
          <div className="client-project">
            <p>
              <strong>Cliente</strong>
            </p>
            <p>{acf.client}</p>
          </div>
          <div className="detail-project">
            <p>
              <strong>Detalles del proyecto</strong>
            </p>
            <div
              className="detail"
              dangerouslySetInnerHTML={{ __html: acf.detail }}
            />
          </div>
          <div className="tech-project">
            <p>
              <strong>Tectnologías y herramientas utilizadas</strong>
            </p>
            <p>{acf.technologies}</p>
          </div>
        </center>
      </TextBlockProject>
      <ImagesProjectStyled>
        {acf.project_image_one && (
          <Img
            alt={acf.project_image_one.alt_text}
            fluid={acf.project_image_one.localFile.childImageSharp.fluid}
          />
        )}
        <div className="dual-images">
          {acf.project_images &&
            acf.project_images.map(imagen => (
              <div className="image" key={imagen.image.id}>
                <Img
                  alt={imagen.image.alt_text}
                  fluid={imagen.image.localFile.childImageSharp.fluid}
                />
              </div>
            ))}
        </div>
      </ImagesProjectStyled>

      <TextBlock>
        <p className="url-project">
          <strong>Échale un vistazo a la web: </strong>
          <strong>
            <a target="_blank" href={acf.url} rel="noreferrer">
              {acf.url}
            </a>
          </strong>
        </p>
      </TextBlock>
    </Layout>
  )
}

export default Proyecto
