import React from "react"
import { TextBlockProjectStyled } from "./TextBlockProjectStyle"

function TextBlockProject({ children }) {
  return (
    <TextBlockProjectStyled>
      <div className="wrapper">{children}</div>
    </TextBlockProjectStyled>
  )
}

export default TextBlockProject
