import React from "react"
import { ImagesProjectStyled } from "./ImagesProjectStyle"

function ImagesProject({ children }) {
  return (
    <ImagesProjectStyled>
      <div className="wrapper">{children}</div>
    </ImagesProjectStyled>
  )
}

export default ImagesProject
