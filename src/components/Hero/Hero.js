import React from "react"
import { HeroStyled } from "./HeroStyle"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Linkedin from "../ui/social/Linkedin"
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  return (
    <HeroStyled>
      <div className="wrapper">
        <div className="info" id="infoHeader">
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
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.google.es">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://www.google.es">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://www.google.es">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="https://www.google.es">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
