import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Titulo de la home" description="descripcion de la página" />
    <h2>{`${process.env.API_URL}`}</h2>
  </Layout>
)

export default IndexPage
