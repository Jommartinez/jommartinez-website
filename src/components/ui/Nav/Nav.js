import React, { useEffect } from "react"
import { NavStyled } from "./NavStyle"
import { Link } from "gatsby"
import { gsap } from "gsap"
import WindowSizeListener from "react-window-size-listener"

function Nav() {
  const navToggle = e => {
    if (window.innerWidth < 768) {
      if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
        e.target.innerHTML = "cerrar_"
        gsap.to("nav ul", 0.35, { left: "-2rem" })
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
    if (window.innerWidth < 768) {
      document.body.classList.remove("hide")
      gsap.to("nav ul", 0.35, { left: "105%" })
      document.querySelector(".menu nav span").classList.remove("active")
      document.querySelector(".menu nav span").innerHTML = "MENÚ"
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
          if (windowSize.windowWidth > 768) {
            gsap.to("nav ul", 0, { left: "-2rem" })
            document.body.classList.remove("hide")
            document.querySelector(".menu-m").classList.remove("active")
            document.querySelector(".menu-m").innerHTML = "menú_"
          } else {
            document.body.classList.remove("hide")
            gsap.to("nav ul", 0.35, { left: "105%" })
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
          <a onTouchEnd={linkClick} onClick={linkClick} href="#contact">
            contacto_
          </a>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav
