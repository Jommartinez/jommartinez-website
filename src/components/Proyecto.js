import React from "react"
import Layout from "./Layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
export const query = graphql`
  query($slug: String!) {
    allWordpressWpJmProyectos(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        slug
      }
    }
  }
`
const Proyecto = ({
  data: {
    allWordpressWpJmProyectos: { nodes, edges },
  },
}) => {
  console.log(edges)

  const { title, slug } = nodes[0]

  return (
    <Layout>
      <div className="wrapper">
        <h1>{title}</h1>
        <p>{slug}</p>
      </div>
    </Layout>
  )
}

export default Proyecto
