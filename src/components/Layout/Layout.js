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
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --dark: #333a3f;
            --light: #f6f6f7;
            --yellow: #f5b133;
            --manrope: "manrope-light", sans-serif;
            --butler: "butler";
            --fontSizeP: 0.938rem;
            --lineHeightP: 1.313rem;
            --fontSizeH1: 3.125rem;
          }
          @media screen and (min-width: 768px) {
            :root {
              --fontSizeP: 1.333rem;
              --lineHeightP: 1.8rem;
              --fontSizeH1: 5rem;
            }
          }
          @media screen and (min-width: 992px) {
            :root {
              --fontSizeP: 1.375rem;
              --lineHeightP: 1.875rem;
              --fontSizeH1: 5.938rem;
            }
          }
          @media screen and (min-width: 1200px) {
            :root {
              --fontSizeP: 1.563rem;
              --lineHeightP: 2.188rem;
              --fontSizeH1: 7.625rem;
            }
          }
          @media screen and (min-width: 1920px) {
            :root {
              --fontSizeP: 2.125rem;
              --lineHeightP: 2.875rem;
              --fontSizeH1: 12.188rem;
            }
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
            padding: 0 2rem;
            @media screen and (min-width: 992px) {
              padding: 0 3rem;
            }
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
