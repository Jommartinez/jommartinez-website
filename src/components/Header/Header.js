import React from "react"
import RightHeader from "../ui/RightHeader"
import Logo from "../ui/Logo"
import { HeaderStyled } from "./HeaderStyle"

function Header({ setDarkMode, darkMode }) {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <div className="content">
          <Logo />
          <RightHeader setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header
