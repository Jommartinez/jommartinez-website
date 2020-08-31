import React, { useEffect, useState } from "react"
import { FooterStyled } from "./FooterStyle"
import NavSocial from "../ui/NavSocial"
import moment from "moment"
function Footer() {
  const [timer, setTimer] = useState(moment().format("HH:mm:ss_DD/MM/YYYY_"))

  useEffect(() => {
    setInterval(() => {
      setTimer(moment().format("HH:mm:ss_DD/MM/YYYY_"))
    }, 1000)
  }, [timer])

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
            {timer}
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
