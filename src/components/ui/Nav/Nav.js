import React, { useEffect } from "react"
import { NavStyled } from "./NavStyle"
import { Link } from "gatsby"
import { gsap } from "gsap"
import WindowSizeListener from "react-window-size-listener"

function Nav() {
  const navToggle = e => {
    if (window.innerWidth <= 991) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
        e.target.innerHTML = "cerrar_"
        gsap.set("nav ul", { left: "105%" })
        gsap.to("nav ul", 0.35, { left: "-2rem" })
        document.body.classList.add("hide")
      } else {
        e.target.classList.remove("active")
        e.target.innerHTML = "menú_"
        gsap.set("nav ul", { left: "105%" })
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

  useEffect(() => {
    gsap.fromTo(
      "nav ul li",
      { autoAlpha: 0, y: 20 },
      { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.3 }
    )
  }, [])

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
      <p className="menu-m" onClick={navToggle} onKeyDown={navToggle}>
        menú_
      </p>
      <ul>
        <li>
          <Link
            onTouchEnd={linkClick}
            onClick={linkClick}
            activeClassName="current"
            to="/servicios"
          >
            servicios_
          </Link>
        </li>
        <li>
          <Link
            onTouchEnd={linkClick}
            onClick={linkClick}
            activeClassName="current"
            to="/proyectos"
          >
            proyectos_
          </Link>
        </li>
        <li>
          <Link
            onTouchEnd={linkClick}
            onClick={linkClick}
            activeClassName="current"
            to="/sobre-mi"
          >
            sobre mí_
          </Link>
        </li>
        <li>
          <a
            onTouchEnd={linkClickAnchor}
            onClick={linkClickAnchor}
            href="#contact"
          >
            contacto_
          </a>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
