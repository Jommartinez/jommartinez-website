import React, { useEffect } from "react"
import { NavStyled } from "./NavStyle"
import { Link } from "gatsby"
import { gsap } from "gsap"

function Nav() {
  useEffect(() => {
    gsap.fromTo(
      "nav ul li",
      { autoAlpha: 0, y: 20 },
      { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.3 }
    )
  })

  return (
    <NavStyled>
      <p>menú_</p>
      <ul>
        <li>
          <Link to="/">servicios_</Link>
        </li>
        <li>
          <Link to="/">proyectos_</Link>
        </li>
        <li>
          <Link to="/">sobre mí_</Link>
        </li>
        <li>
          <Link to="/">contacto_</Link>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
