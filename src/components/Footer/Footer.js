import React from "react"
import { FooterStyled } from "./FooterStyle"
import NavSocial from "../ui/NavSocial"

function Footer() {
  return (
    <FooterStyled id="contact">
      <div className="wrapper">
        <div className="content">
          <p>
            Si te gusta lo que hago no dudes en contactarme
            <br /> ¡Comencemos un proyecto juntos!
          </p>
          <p>
            <a href="mailto:contact@jommartinez.com">contact@jommartinez.com</a>
            <br />
            Madrid
            <br />
            17:33_07/07/2020_
          </p>
          <p className="legal">© 2020 - Todos los derechos reservados.</p>
        </div>
        <NavSocial />
      </div>
    </FooterStyled>
  )
}

export default Footer
