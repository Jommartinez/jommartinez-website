import React from "react"
import { FooterStyled } from "./FooterStyle"
import NavSocial from "../ui/NavSocial"
import moment from "moment"
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
            <a href="mailto:hello@jommartinez.com">hello@jommartinez.com</a>
            <br />
            Madrid
            <br />
            {moment().format("HH:mm_DD/MM/YYYY_")}
          </p>
          <p className="legal">
            © {moment().format("YYYY")} - Todos los derechos reservados.
          </p>
        </div>
        <NavSocial />
      </div>
    </FooterStyled>
  )
}

export default Footer
