import React, { useState, useEffect } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { Global, css } from "@emotion/core"

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode"

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "butler";
            src: url("../fonts/butler/Butler-Black.woff2") format("woff2"),
              url("../fonts/butler/Butler-Black.woff") format("woff");
            font-weight: 900;
            font-style: normal;
          }

          @font-face {
            font-family: "manrope-bold";
            src: url("../fonts/manrope/Manrope-Bold.woff2") format("woff2"),
              url("../fonts/manrope/Manrope-Bold.woff") format("woff");
            font-weight: 700;
            font-style: normal;
          }

          @font-face {
            font-family: "manrope-light";
            src: url("../fonts/manrope/Manrope-Light.woff2") format("woff2"),
              url("../fonts/manrope/Manrope-Light.woff") format("woff");
            font-weight: 300;
            font-style: normal;
          }

          @font-face {
            font-family: "manrope-regular";
            src: url("../fonts/manrope/Manrope-Regular.woff2") format("woff2"),
              url("../fonts/manrope/Manrope-Regular.woff") format("woff");
            font-weight: 400;
            font-style: normal;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --dark: #333a3f;
            --light: #f6f6f7;
            --yellow: #f5b133;
          }
          .is-dark-mode {
            --dark: #333a3f;
            --light: #f6f6f7;
            --yellow: #f5b133;
          }

          .is-light-mode {
            --dark: #f6f6f7;
            --light: #333a3f;
            --yellow: #f5b133;
          }

          .wrapper {
            margin: 0 auto;
            width: 100%;
            max-width: 1506px;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              --dark: #333a3f;
              --light: #f6f6f7;
              --yellow: #f5b133;
            }
          }
        `}
      />
      <div className={`website ${mainClass}`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
