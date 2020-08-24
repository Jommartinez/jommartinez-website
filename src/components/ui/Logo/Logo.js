import React from "react"
import { LogoStyled } from "./LogoStyle"
import LogoSvg from "../svg/LogoSvg"
import { Link } from "gatsby"

function Logo() {
  return (
    <LogoStyled>
      <Link to="/">
        <LogoSvg />
      </Link>
    </LogoStyled>
  )
}

export default Logo
