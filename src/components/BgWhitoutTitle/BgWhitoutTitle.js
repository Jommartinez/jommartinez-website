import React from "react"
import { BgWhitoutTitleStyled } from "./BgWhitoutTitleStyle"

function BgWhitoutTitle({ image, alt }) {
  return (
    <BgWhitoutTitleStyled>
      <img src={image} alt={alt} />
      <div className="wrapper">
        <div className="content"></div>
      </div>
    </BgWhitoutTitleStyled>
  )
}

export default BgWhitoutTitle
