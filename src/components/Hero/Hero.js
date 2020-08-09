import React from "react"
import { HeroStyled } from "./HeroStyle"

function Hero() {
  return (
    <HeroStyled>
      <div className="wrapper">
        <div className="info">
          <p>
            Hola! Soy <strong>desarrollador</strong> WordPress y frontend_
            <span>Bienvenido a mi web_</span>
          </p>
          <div className="name">
            <h1>
              Jonathan <span>Martínez</span>
            </h1>
            <p></p>
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="">In</a>
            </li>
            <li>
              <a href="">Tw</a>
            </li>
            <li>
              <a href="">Gh</a>
            </li>
            <li>
              <a href="">It</a>
            </li>
          </ul>
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
