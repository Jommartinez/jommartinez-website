import React, { useRef, useEffect } from "react"
import { HeroStyled } from "./HeroStyle"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const socialRef = useRef([])
  socialRef.current = []

  const socials = [
    {
      href: "https://google.es",
      text: "In",
    },
    {
      href: "https://google.es",
      text: "Tw",
    },
    {
      href: "https://google.es",
      text: "Gh",
    },
    {
      href: "https://google.es",
      text: "It",
    },
  ]

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 10,
      opacity: 0,
      duration: 0.35,
      delay: 2,
      scrollTrigger: {
        markers: true,
        trigger: heroRef.current,
        start: "top bottom-=200",
        toggleActions: "play none none reverse",
      },
    })

    socialRef.current.forEach((el, index) => {
      gsap.from(el, {
        y: 10,
        opacity: 0,
        duration: 0.35,
        delay: 0,
        scrollTrigger: {
          markers: true,
          trigger: el,
          start: "top bottom-=200",
          toggleActions: "play none none reverse",
        },
      })
    })
  }, [])

  const addToSocialRefs = el => {
    if (el && !socialRef.current.includes(el)) {
      socialRef.current.push(el)
    }
  }

  return (
    <HeroStyled>
      <div className="wrapper">
        <div className="info" id="infoHeader" ref={heroRef}>
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
            {socials.map(({ href, text }) => (
              <li key={text} ref={addToSocialRefs}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeroStyled>
  )
}

export default Hero
