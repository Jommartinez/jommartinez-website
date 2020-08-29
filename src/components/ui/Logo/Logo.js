import React from "react"
import { LogoStyled } from "./LogoStyle"
import LogoSvg from "../svg/LogoSvg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Logo() {
  return (
    <LogoStyled>
      <AniLink paintDrip hex="#f5b133" to="/">
        <LogoSvg />
      </AniLink>
    </LogoStyled>
  )
}

export default Logo
