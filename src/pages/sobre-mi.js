import React from "react"
import Layout from "../components/Layout"
import SeoComponent from "../components/SeoComponent"
import HeroText from "../components/HeroText"
import TextBlock from "../components/TextBlock"
import BgWhitoutTitle from "../components/BgWhitoutTitle"
import cabecera from "../images/cabecera.jpg"
const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de servicios"
      description="descripcion de la página de servicios"
    />
    <HeroText>
      <h1>Sobre mi_</h1>
      <p>
        Hola! Soy Jonathan Martínez, <strong>desarrollador</strong> WordPress y
        frontend_
      </p>
    </HeroText>
    <BgWhitoutTitle image={cabecera} alt="cabecera de imagen" />
    <TextBlock>
      <p>
        En inglés, que es como venden más las cosas, podría decir que soy un
        senior WordPress and frontend developer con más de 8 años de
        experiencia. Y eso que parece que fue ayer cuando empecé a escribir mi
        primer codigo de manera autodidacta.
      </p>
      <p>
        Me dedico a desarrollar sitios web personalizados basados en los últimos
        estándares establecidos por el World Wide Web Consortium (W3C),
        cubriendo las responsabilidades Frontend (HTML/CSS/JavaScript) y
        back-end (WordPress como CMS) en caso de ser necesario.
      </p>
      <p>
        Me gusta añadir valor a los proyectos que desarrollo siendo honesto,
        pro-activo y una persona de confianza. Además acompaño todos los
        proyectos desde su primera fase gráfica para poder ofrecer una
        experiencia consistente en base a los requisitos del proyecto.
      </p>
    </TextBlock>
  </Layout>
)

export default IndexPage
