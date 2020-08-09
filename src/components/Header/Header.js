import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import RightHeader from "../ui/RightHeader"
import Logo from "../ui/Logo"
import { HeaderStyled } from "./HeaderStyle"

function Header({ setDarkMode, darkMode }) {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.35,
      delay: 0,
    })
  }, [])

  return (
    <HeaderStyled>
      <div className="wrapper">
        <div className="content" ref={headerRef}>
          <Logo />
          <RightHeader setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header
