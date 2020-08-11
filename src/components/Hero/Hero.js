import React from "react"
import { HeroStyled } from "./HeroStyle"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavSocial from "../ui/NavSocial"
import Hello from "../ui/Hello"
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  return (
    <HeroStyled>
      <div className="wrapper">
        <Hello />
        <NavSocial />
      </div>
    </HeroStyled>
  )
}

export default Hero
