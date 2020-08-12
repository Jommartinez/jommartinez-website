import React from "react"
import { SectionTitleRightStyled } from "./SectionTitleRightStyle"
import { Link } from "gatsby"

function SectionTitleRight() {
  return (
    <SectionTitleRightStyled>
      <div className="wrapper">
        <p>
          WordPress es el CMS más usado en todo el mundo. Por ello estoy
          especializado en su uso y desarrollo personalizado, ya sea para
          desarrollar temas desde cero, o si el cliente lo requiere modificando
          una plantilla Premium existente. Además en caso de que sea necesario
          podré desarrollar plugins adaptados a tus necesidades.
        </p>

        <div className="blockTitle">
          <h2>WordPress developer_</h2>
          <Link to="/">
            <span>cuéntame más</span>
            <span className="icon">+</span>
          </Link>
        </div>
      </div>
    </SectionTitleRightStyled>
  )
}

export default SectionTitleRight
