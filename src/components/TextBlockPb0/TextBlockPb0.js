import React from "react"
import { TextBlockPb0Styled } from "./TextBlockPb0Style"

function TextBlockPb0({ children }) {
  return (
    <TextBlockPb0Styled>
      <div className="wrapper">{children}</div>
    </TextBlockPb0Styled>
  )
}

export default TextBlockPb0
