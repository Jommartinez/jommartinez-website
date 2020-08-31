import { useStaticQuery, graphql } from "gatsby"

const useProyectos = () => {
  const datos = useStaticQuery(
    graphql`
      {
        allWordpressWpJmProyectos(
          filter: { acf: { show_in_cover: { eq: true } } }
        ) {
          nodes {
            title
            slug
            wordpress_id
            acf {
              category
              show_in_cover
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
  }))
}

export default useProyectos
