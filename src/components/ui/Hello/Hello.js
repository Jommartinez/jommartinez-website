import React from "react"
import { HelloStyled } from "./HelloStyle"

function Hello() {
  return (
    <HelloStyled className="info" id="infoHeader">
      <p>
        Hola! Soy <strong>desarrollador</strong> WordPress y frontend_
        <span>Bienvenido a mi web_</span>
      </p>
      <div className="name">
        <h1>
          <span className="nameT">Jonathan</span>{" "}
          <span className="stroke">Martínez</span>
        </h1>
        <p></p>
      </div>
    </HelloStyled>
  )
}

export default Hello
