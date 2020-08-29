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
        Hola, soy Jonathan Martínez, y como ya sabrás soy desarrollador frontend
        y WordPress. Llevo desde 2011 dedicándome a esto y ¡no tengo intenciones
        de parar! En mi trayectoria profesional he tenido la oportunidad de
        trabajar junto a grandes y a pequeños equipos, de diseño, de UX, de
        desarrollo… y de todos ellos he aprendido cosas que me han permitido
        crecer como profesional y despertar en mí el interés y las ganas por
        seguir investigando y trabajando utilizando nuevas tecnologías y
        métodos. Por ejemplo, aunque soy frontend, también tengo algunos
        conocimientos en backend, UX y UI.
      </p>
      <p>
        Siempre he sido muy autodidacta y firme defensor de que la práctica y el
        error son grandes maestros. Por eso, cuando salgo de la oficina (trabajo
        como desarrollador web en la agencia acute & creative, por donde podéis
        pasar para ver algunos de los proyectos en los que he participado) no
        puedo evitar seguir tecleando código buscando crear cosas nuevas que me
        permitan mejorar y convertirme en un desarrollador aún más completo.
      </p>
      <p>
        Para mí, cada proyecto, cada desarrollo, es un reto. No basta con
        sentarse y hacer siempre lo mismo, aunque ya te haya funcionado antes,
        lo interesante es volver a hacerlo pero desde otro planteamiento que te
        permita ser más ágil, más eficaz, más productivo y conseguir un mejor
        resultado. Creo que el mayor pecado de un desarrollador web es ser
        demasiado conformista, por eso considero que mi mayor virtud es la de no
        conformarme con nada tratando siempre de realizar un trabajo limpio,
        eficaz, detallado, capaz de generar en el cliente la mayor sensación de
        satisfacción, orgullo y seguridad.
      </p>
      <p>
        Aunque tengo una gran experiencia con el diseño y desarrollo web, nunca
        dejo de aprender. En los últimos años, por ejemplo, he estado
        investigando y trabajando en la creación de webs con React y Gatsby
        junto a WordPress como CMS.
      </p>
      <p>
        Por cierto, cuando no estoy frente al ordenador, me podéis encontrar
        corriendo. Sí, soy runner, podríamos decir que principiante, esperando
        que la pandemia me deje correr pronto mi primera media maratón.
      </p>
      <p>
        Aparte de toda esta parrafada, también puedes descargarte mi{" "}
        <strong>
          <a href={`../../cv.pdf`}>CV</a>
        </strong>{" "}
        y conocer mejor mi trayectoria profesional :)
      </p>
    </TextBlock>
  </Layout>
)

export default IndexPage
