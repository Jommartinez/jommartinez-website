import React from "react"
import { NavSocialStyled } from "./NavSocialStyle"
import Linkedin from "../social/Linkedin/Linkedin"

function NavSocial() {
  return (
    <NavSocialStyled>
      <ul>
        <li>
          <a href="https://www.google.es">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://www.google.es">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://www.google.es">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://www.google.es">
            <Linkedin />
          </a>
        </li>
      </ul>
    </NavSocialStyled>
  )
}

export default NavSocial
