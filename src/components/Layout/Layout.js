import React, { useState, useEffect } from "react"
import Header from "../Header"
import Footer from "../Footer"
import Cursor from "../ui/Cursor"
import { Global, css } from "@emotion/core"
import "./layout.css"

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(getInitialMode())
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode"

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode))
  }, [darkMode])

  function getInitialMode() {
    if (window) {
      const isReturningUser = "dark" in localStorage
      const savedMode = JSON.parse(localStorage.getItem("dark"))
      const userPrefersDark = getPrefColorScheme()

      // if mode was saved --> dark / light
      if (isReturningUser) {
        return savedMode
        // if preferred color scheme is dark --> dark
      } else if (userPrefersDark) {
        return true
        // otherwise --> light
      } else {
        return false
      }
      // return savedMode || false;
    } else {
      return true
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            overflow-x: hidden;
            cursor: none;
          }
          body.hide {
            overflow: hidden;
          }
          :root {
            --dark: #333a3f;
            --light: #f6f6f7;
            --yellow: #f5b133;
            --manrope: "manrope-light", sans-serif;
            --manropeBold: "manrope-bold", sans-serif;
            --manropeRegular: "manrope-regular", sans-serif;
            --butler: "butler";
            --fontSizeP: 0.938rem;
            --lineHeightP: 1.313rem;
            --fontSizeH1: 3.125rem;
            --fontSizeH2: 1.375rem;
          }
          strong {
            font-family: var(--manropeBold);
          }
          @media screen and (min-width: 576px) {
            :root {
              --fontSizeH2: 1.875rem;
            }
          }
          @media screen and (min-width: 768px) {
            :root {
              --fontSizeP: 1.25rem;
              --lineHeightP: 1.688rem;
              --fontSizeH1: 5rem;
              --fontSizeH2: 3.125rem;
            }
          }
          @media screen and (min-width: 992px) {
            :root {
              --fontSizeP: 1.375rem;
              --lineHeightP: 1.875rem;
              --fontSizeH1: 5.938rem;
              --fontSizeH2: 4.063rem;
            }
          }
          @media screen and (min-width: 1200px) {
            :root {
              --fontSizeP: 1.563rem;
              --lineHeightP: 2.188rem;
              --fontSizeH1: 7.625rem;
              --fontSizeH2: 5.313rem;
            }
          }
          @media screen and (min-width: 1920px) {
            :root {
              --fontSizeP: 1.875rem;
              --lineHeightP: 2.563rem;
              --fontSizeH1: 12.188rem;
              --fontSizeH2: 6.25rem;
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
            max-width: 1602px;
            padding: 0 2rem;
            @media screen and (min-width: 992px) {
              padding: 0 1.938rem;
              max-width: 992px;
            }
            @media screen and (min-width: 1200px) {
              padding: 0 2.813rem;
              max-width: 1200px;
            }
            @media screen and (min-width: 1920px) {
              padding: 0 3rem;
              max-width: 1602px;
            }
          }

          body {
            background-color: var(--dark);
            img {
              display: block;
            }
          }
          .tl-wrapper-status--entered {
            transform: none !important;
          }
        `}
      />
      <div className={`website ${mainClass}`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
        <Cursor />
      </div>
    </>
  )
}
