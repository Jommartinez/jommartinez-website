import React from "react"
import { HeaderStyled } from "./HeaderStyle"
import Switch from "../Switch"

function Header({ setDarkMode, darkMode }) {
  return (
    <HeaderStyled>
      <Switch setDarkMode={setDarkMode} darkMode={darkMode} />
    </HeaderStyled>
  )
}

export default Header
