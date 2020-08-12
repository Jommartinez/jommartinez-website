import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SeoComponent from "../components/SeoComponent"
import BgTitle from "../components/BgTitle"

const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de la home"
      description="descripcion de la página"
    />
    <Hero />
    <BgTitle />
  </Layout>
)

export default IndexPage
