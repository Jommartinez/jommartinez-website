import React from "react"
import { SwitchStyled } from "./SwitchStyle"

export default function Switch({ setDarkMode, darkMode }) {
  function handleClick() {
    setDarkMode(!darkMode)
  }

  return (
    <SwitchStyled>
      <div onClick={handleClick}>
        <div className="moon">
          {darkMode ? <span>dark</span> : <span>light</span>}
        </div>
      </div>
    </SwitchStyled>
  )
}
