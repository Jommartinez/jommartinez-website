import React from "react"
import { SectionTitleLeftStyled } from "./SectionTitleLeftStyle"
import { Link } from "gatsby"

function SectionTitleLeft() {
  return (
    <SectionTitleLeftStyled>
      <div className="wrapper">
        <div className="blockTitle">
          <h2>Frontend developer_</h2>
          <Link to="/">
            <span>cuéntame más</span>
            <span className="icon">+</span>
          </Link>
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
