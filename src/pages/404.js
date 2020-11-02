import React from "react"
import Layout from "../components/Layout"
import SeoComponent from "../components/SeoComponent"
import HeroText from "../components/HeroText"
import OctopusSvg from "../components/ui/svg/OctopusSvg"

const NotFoundPage = () => (
  <Layout>
    <SeoComponent
      title="404: Not found"
      description="La página que estás buscando no existe!"
    />
    <HeroText>
      <h1>404 Not Found</h1>
      <p>
        Vaya, parece que alguien está más perdido que un pulpo en un garaje.
      </p>
      <OctopusSvg />
    </HeroText>
  </Layout>
)

export default NotFoundPage
