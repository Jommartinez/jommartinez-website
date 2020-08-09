import React from "react"
import { RightHeaderStyled } from "./RightHeaderStyle"
import Switch from "../Switch"
import Nav from "../Nav"

function RightHeader({ setDarkMode, darkMode }) {
  return (
    <RightHeaderStyled>
      <Nav />
      <Switch setDarkMode={setDarkMode} darkMode={darkMode} />
    </RightHeaderStyled>
  )
}

export default RightHeader
