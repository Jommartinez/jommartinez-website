import React from "react"
import { BgTitleStyled } from "./BgTitleStyle"
import bgImage from "../../images/bgsection.jpg"

function BgTitle() {
  return (
    <BgTitleStyled>
      <img src={bgImage} alt="cabecera de sección" />
      <div className="wrapper">
        <div className="content"></div>
        <h2>Servicios_</h2>
      </div>
    </BgTitleStyled>
  )
}

export default BgTitle
