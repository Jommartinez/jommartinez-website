import React from "react"
import { HeroTextProjectStyled } from "./HeroTextProjectStyle"

function HeroTextProject({ children }) {
  return (
    <HeroTextProjectStyled>
      <div className="wrapper">{children}</div>
    </HeroTextProjectStyled>
  )
}

export default HeroTextProject
