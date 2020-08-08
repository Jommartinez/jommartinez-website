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

          @media (prefers-color-scheme: dark) {
            :root {
              --dark: #333a3f;
              --light: #f6f6f7;
              --yellow: #f5b133;
            }
          }
        `}
      />
      <div className={mainClass}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
