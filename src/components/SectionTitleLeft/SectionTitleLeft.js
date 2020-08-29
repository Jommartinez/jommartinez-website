import React from "react"
import { SectionTitleLeftStyled } from "./SectionTitleLeftStyle"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function SectionTitleLeft() {
  return (
    <SectionTitleLeftStyled>
      <div className="wrapper">
        <div className="blockTitle">
          <h2>Frontend developer_</h2>
          <AniLink paintDrip hex="#f5b133" to="/servicios/#frontend-developer">
            <span>cuéntame más</span>
            <span className="icon">+</span>
          </AniLink>
        </div>
        <p>
          Desarrollo tu producto desde el concepto visual hasta una web
          completamente funcional, siempre utilizando las últimas tecnologías
          web como HTML5, CSS3 y JavaScript junto a los mejores estándares de
          codificación. Además como cada vez es más importante tener informados
          a tus clientes a través de actualizaciones periódicas por email, me
          encargaré de desarrollar newsletters compatibles con los principales
          clientes de correo.
        </p>
      </div>
    </SectionTitleLeftStyled>
  )
}

export default SectionTitleLeft
