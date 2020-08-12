import React from "react"
import { TitleRightStyled } from "./TitleRightStyle"

export default function TitleRight({ children }) {
  return (
    <TitleRightStyled>
      <div className="wrapper">{children}</div>
    </TitleRightStyled>
  )
}
