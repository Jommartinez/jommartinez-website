import React from "react"
import { NavSocialStyled } from "./NavSocialStyle"
import Linkedin from "../social/Linkedin/Linkedin"
import Github from "../social/Github"
import Instagram from "../social/Instagram"

function NavSocial() {
  return (
    <NavSocialStyled>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/jommartinez/">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jommartinez">
            <Github />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/jommartinez_">
            <Instagram />
          </a>
        </li>
      </ul>
    </NavSocialStyled>
  )
}

export default NavSocial
