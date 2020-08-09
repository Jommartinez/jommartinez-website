import React from "react"
import { NavStyled } from "./NavStyle"
import { Link } from "gatsby"

function Nav() {
  return (
    <NavStyled>
      <ul>
        <li>
          <Link to="">servicios_</Link>
        </li>
        <li>
          <Link to="">proyectos_</Link>
        </li>
        <li>
          <Link to="">sobre mí_</Link>
        </li>
        <li>
          <Link to="">contacto_</Link>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
