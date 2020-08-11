import React from "react"
import { SwitchStyled } from "./SwitchStyle"
import Moon from "./Moon"
import Sun from "./Sun"

export default function Switch({ setDarkMode, darkMode }) {
  const switchMoon = darkMode ? "moon" : "sun"
  function handleClick() {
    setDarkMode(!darkMode)
  }

  return (
    <SwitchStyled>
      <div className="switch" onClick={handleClick}>
        <div className={`selected ${switchMoon}`}>
          {darkMode ? <Moon /> : <Sun />}
        </div>
      </div>
    </SwitchStyled>
  )
}
