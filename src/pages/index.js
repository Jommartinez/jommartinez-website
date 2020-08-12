import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SeoComponent from "../components/SeoComponent"
import BgTitle from "../components/BgTitle"
import TextBlock from "../components/TextBlock"
import SectionTitleLeft from "../components/SectionTitleLeft"
import SectionTitleRight from "../components/SectionTitleRight"

const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de la home"
      description="descripcion de la página"
    />
    <Hero />
    <BgTitle />
    <TextBlock>
      <p className="head">
        <strong>¿Qué hago? ¿Cómo trabajo?_</strong>
      </p>
      <p>
        Desarrollo portales web, pero no como cualquiera, yo siempre presto la
        máxima atención al detalle para conseguir un resultado fiel al diseño
        entregado.
      </p>
      <p>
        Conmigo no habrá sorpresas del tipo “lo que pedí VS. lo que recibí”.
      </p>
    </TextBlock>
    <SectionTitleLeft />
    <SectionTitleRight />
  </Layout>
)

export default IndexPage
