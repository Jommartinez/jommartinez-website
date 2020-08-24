import React from "react"
import Layout from "../components/Layout"
import SeoComponent from "../components/SeoComponent"
import TitleRight from "../components/ui/TitleRight"
import ProjectsHome from "../components/ProjectsHome"
import AccordeonService from "../components/AccordeonService"
import HeroText from "../components/HeroText"
import bgImage from "../images/bgsection.jpg"
const textFront = `
<p>
  <strong>Código preciso</strong>
</p>
<p>
  ¿Desarrollar respetando todos y cada uno de los píxeles que aparecen
  en el diseño inicial? ¡Claro que es posible! Para lograr un buen
  resultado de maquetación y no tirar por tierra el trabajo realizado
  por el diseñador utilizo inVision, una aplicación web que me permite
  importar diseños desde Photoshop y Sketch para comprobar medidas,
  exportar imágenes y símbolos, consultar los colores, etc. Así puedo
  elaborar un desarrollo fiel, evitando sorpresas de “esto no es lo
  que te pedí” o “no se parece en nada a la propuesta inicial”.
</p>
<p>
  También estoy familiarizado con otros softwares como por ejemplo
  Zeplin o Marvel, que me permiten conseguir los mejores resultados.
  ¡Solo tienes que echarle un vistazo a mis proyectos! :)
</p>
<p>
  <strong>Pruebas de navegadores web</strong>
</p>
<p>
  El proceso de pruebas entre los diferentes navegadores es una parte
  muy importante. Durante el desarrollo siempre tengo en cuenta que la
  pagina debe funcionar en los navegadores más utilizados en el
  mercado. Da igual desde donde visualices la web, si desde Safari o
  Google, ésta debería de verse a la perfección.
</p>
<p>
  <strong>Tareas automatizadas y control de versiones</strong>
</p>
<p>
  A nadie le gusta perder el tiempo, por lo que algunas tareas se automatizan utilizando herramientas como gulp, npm o webpack.
</p>
<p>Además, como creo que todos tenemos derecho a equivocarnos, utilizo GIT que me permite mantener un historial de todo el código escrito, además de facilitar el trabajo colaborativo con otros desarrolladores en caso de ser necesario.</p>
`
const textWp = `
<p>
  <strong>wordpress</strong>
</p>
<p>
  ¿Desarrollar respetando todos y cada uno de los píxeles que aparecen
  en el diseño inicial? ¡Claro que es posible! Para lograr un buen
  resultado de maquetación y no tirar por tierra el trabajo realizado
  por el diseñador utilizo inVision, una aplicación web que me permite
  importar diseños desde Photoshop y Sketch para comprobar medidas,
  exportar imágenes y símbolos, consultar los colores, etc. Así puedo
  elaborar un desarrollo fiel, evitando sorpresas de “esto no es lo
  que te pedí” o “no se parece en nada a la propuesta inicial”.
</p>
`
const IndexPage = () => (
  <Layout>
    <SeoComponent
      title="Titulo de servicios"
      description="descripcion de la página de servicios"
    />
    <HeroText>
      <h1>Servicios_</h1>
      <p>
        Lo mio es el desarrollo frontend y el desarrollo WordPress. Aquí te
        cuento un poco más sobre cómo planteo y trabajo con cada desarrollo. No
        pienses que esto va solo de escribir código y lograr que las cosas
        funcionen, hay mucho más detrás de cada proyecto, desde lograr una buena
        optimización de la página hasta conseguir un resultado 100% idéntico al
        diseño propuesto.
      </p>
    </HeroText>
    <AccordeonService
      idService="frontend-developer"
      textTitle="Frontend<br />developer_"
      align="left"
      text={textFront}
      bgImage={bgImage}
    />
    <AccordeonService
      idService="wordpress-developer"
      textTitle="WordPress<br />developer_"
      align="left"
      text={textWp}
      bgImage={bgImage}
    />
    <TitleRight>
      <h2>Proyectos_</h2>
    </TitleRight>
    <ProjectsHome />
  </Layout>
)

export default IndexPage
