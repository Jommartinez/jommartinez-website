import { useStaticQuery, graphql } from "gatsby"

const useProyectosGrid = () => {
  const datos = useStaticQuery(
    graphql`
      {
        allWordpressWpJmProyectos {
          nodes {
            title
            slug
            wordpress_id
            acf {
              category
              show_in_cover
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 510) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt_text
            }
          }
        }
      }
    `
  )

  return datos.allWordpressWpJmProyectos.nodes.map(proyecto => ({
    titulo: proyecto.title,
    slug: proyecto.slug,
    id: proyecto.wordpress_id,
    categoria: proyecto.acf.category,
    enPortada: proyecto.acf.show_in_cover,
    featured_media: proyecto.featured_media,
  }))
}

export default useProyectosGrid
