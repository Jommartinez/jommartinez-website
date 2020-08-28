import React from "react"
import Layout from "../components/Layout"
import SeoComponent from "../components/SeoComponent"
import ProjectsHome from "../components/ProjectsHome"
import HeroText from "../components/HeroText"

const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de servicios"
      description="descripcion de la página de servicios"
    />
    <HeroText>
      <h1>Proyectos_</h1>
      <p>
        Podría enseñaros mil líneas de código, todas ordenaditas, siguiendo una
        estructura… pero ¿a quién vamos a engañar? Aquí habéis venido a ver
        webs, a descubrir cómo son esos proyectos a los que de alguna forma “he
        dado la vida”.
      </p>
      <p>Aquí tenéis algunos de mis trabajos. ¡Espero que os gusten!</p>
    </HeroText>
    <ProjectsHome />
  </Layout>
)

export default IndexPage
