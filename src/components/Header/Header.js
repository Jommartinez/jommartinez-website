import React from "react"
import { HeaderStyled } from "./HeaderStyle"
import Logo from "../ui/Logo"
import RightHeader from "../ui/RightHeader"

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
