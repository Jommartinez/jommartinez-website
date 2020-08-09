import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Titulo de la home" description="descripcion de la página" />
    <Hero />
    <h2>{`${process.env.API_URL}`}</h2>
  </Layout>
)

export default IndexPage
