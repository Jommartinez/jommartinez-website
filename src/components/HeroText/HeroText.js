import React from "react"
import { HeroTextStyled } from "./HeroTextStyle"

function HeroText({ children }) {
  return (
    <HeroTextStyled>
      <div className="wrapper">{children}</div>
    </HeroTextStyled>
  )
}

export default HeroText
