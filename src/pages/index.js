import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SeoComponent from "../components/SeoComponent"

const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de la home"
      description="descripcion de la página"
    />
    <Hero />
    <h2>{`${process.env.API_URL}`}</h2>
  </Layout>
)

export default IndexPage
