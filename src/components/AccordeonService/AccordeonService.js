import React from "react"
import {
  AccordeonServiceStyled,
  AccordeonBlockStyled,
  AccordeonTextStyled,
} from "./AccordeonServiceStyle"

function AccordeonService({ idService, textTitle, align, text, bgImage }) {
  return (
    <AccordeonBlockStyled>
      <AccordeonServiceStyled id={idService}>
        <img src={bgImage} alt="cabecera de sección" />
        <div className="wrapper">
          <div className="content"></div>
          <h2
            dangerouslySetInnerHTML={{ __html: textTitle }}
            className={`${align}`}
          />
        </div>
      </AccordeonServiceStyled>
      <AccordeonTextStyled>
        <div dangerouslySetInnerHTML={{ __html: text }} className="wrapper" />
      </AccordeonTextStyled>
    </AccordeonBlockStyled>
  )
}

export default AccordeonService
