import React from "react"
import { NavSocialStyled } from "./NavSocialStyle"
import Linkedin from "../social/Linkedin/Linkedin"
import Github from "../social/Github"
import Twitter from "../social/Twitter"
import Instagram from "../social/Instagram"

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
            <Github />
          </a>
        </li>
        <li>
          <a href="https://www.google.es">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="https://www.google.es">
            <Instagram />
          </a>
        </li>
      </ul>
    </NavSocialStyled>
  )
}

export default NavSocial
