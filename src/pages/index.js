import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Titulo de la home" description="descripcion de la página" />
    <Hero />
    <h2>{`${process.env.API_URL}`}</h2>
  </Layout>
)

export default IndexPage
