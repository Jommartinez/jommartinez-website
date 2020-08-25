exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allWordpressWpJmProyectos {
        nodes {
          slug
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultados ", resultado.errors)
  }

  // Si hay paginas, crear los archivos
  const proyectos = resultado.data.allWordpressWpJmProyectos.nodes

  proyectos.forEach(proyecto => {
    actions.createPage({
      path: proyecto.slug,
      component: require.resolve("./src/components/Proyecto.js"),
      context: {
        slug: proyecto.slug,
      },
    })
  })
}
