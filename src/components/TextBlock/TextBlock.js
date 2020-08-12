import React from "react"
import { TextBlockStyled } from "./TextBlockStyle"

function TextBlock({ children }) {
  return (
    <TextBlockStyled>
      <div className="wrapper">{children}</div>
    </TextBlockStyled>
  )
}

export default TextBlock
