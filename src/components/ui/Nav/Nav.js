import React from "react"
import { NavStyled } from "./NavStyle"

import { gsap } from "gsap"
import WindowSizeListener from "react-window-size-listener"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Nav() {
  const navToggle = e => {
    if (window.innerWidth <= 991) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
        e.target.innerHTML = "cerrar_"
        gsap.set("nav ul", { left: "105%" })
        gsap.to("nav ul", 0.35, { left: "0" })
        document.body.classList.add("hide")
      } else {
        e.target.classList.remove("active")
        e.target.innerHTML = "menú_"
        gsap.to("nav ul", 0.35, { left: "105%" })
        document.body.classList.remove("hide")
      }
    }
  }
  const linkClick = e => {
    if (window.innerWidth <= 991) {
      document.body.classList.remove("hide")
      gsap.to("nav ul", 0.35, { left: "105%" })
      document.querySelector(".menu-m").classList.remove("active")
      document.querySelector(".menu-m").innerHTML = "menu_"
    }
  }
  const linkClickAnchor = e => {
    if (window.innerWidth <= 991) {
      document.body.classList.remove("hide")
      gsap.to("nav ul", 0.35, { left: "105%" })
      document.querySelector(".menu-m").classList.remove("active")
      document.querySelector(".menu-m").innerHTML = "menu_"
    }
  }

  return (
    <NavStyled>
      <WindowSizeListener
        onResize={windowSize => {
          if (windowSize.windowWidth < 991) {
            gsap.set("nav ul", { left: "105%" })
            document.body.classList.remove("hide")
            document.querySelector(".menu-m").classList.remove("active")
            document.querySelector(".menu-m").innerHTML = "menú_"
          } else {
            document.body.classList.remove("hide")
            gsap.set("nav ul", { left: "105%" })
            document.querySelector(".menu-m").classList.remove("active")
            document.querySelector(".menu-m").innerHTML = "menú_"
          }
        }}
      />
      <p className="menu-m" onTouchEnd={navToggle} onKeyDown={navToggle}>
        menú_
      </p>
      <ul>
        <li>
          <AniLink
            paintDrip
            hex="#f5b133"
            onTouchEnd={linkClick}
            onMouseUp={linkClick}
            activeClassName="current"
            to="/servicios"
          >
            servicios<span>_</span>
          </AniLink>
        </li>
        <li>
          <AniLink
            paintDrip
            hex="#f5b133"
            onTouchEnd={linkClick}
            onMouseUp={linkClick}
            activeClassName="current"
            to="/proyectos"
          >
            proyectos<span>_</span>
          </AniLink>
        </li>
        <li>
          <AniLink
            paintDrip
            hex="#f5b133"
            onTouchEnd={linkClick}
            onMouseUp={linkClick}
            activeClassName="current"
            to="/sobre-mi"
          >
            sobre mí<span>_</span>
          </AniLink>
        </li>
        <li>
          <a
            onTouchEnd={linkClickAnchor}
            onMouseUp={linkClickAnchor}
            href="#contact"
          >
            contacto<span>_</span>
          </a>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
