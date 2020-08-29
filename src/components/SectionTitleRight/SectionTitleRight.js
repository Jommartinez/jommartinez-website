import React from "react"
import { SectionTitleRightStyled } from "./SectionTitleRightStyle"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <AniLink paintDrip hex="#f5b133" to="/servicios/#wordpress-developer">
            <span>cuéntame más</span>
            <span className="icon">+</span>
          </AniLink>
        </div>
      </div>
    </SectionTitleRightStyled>
  )
}

export default SectionTitleRight
