import { useEffect } from "react"
import useLocalStorage from "./use-local-storage"
import useMedia from "./use-media"

function useDarkMode() {
  //use our iseLocalStorage to persist state through a page refresh

  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled")

  //if user has set a browser or OS preference for dark mode
  const prefersDarkMode = usePrefersdarkMode()

  //this allows user to override OS level setting on our website
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode

  //effect that add/ removes dark mode class
  useEffect(
    () => {
      if (typeof window !== `undefined`) {
        const element = window.document.body

        if (enabled) {
          element.classList.add("is-dark-mode")
          element.classList.remove("is-light-mode")
        } else {
          element.classList.add("is-light-mode")
          element.classList.remove("is-dark-mode")
        }
      }
    },
    [enabled] //only re-call effect when value changes
  )

  return [enabled, setEnabledState]
}

function usePrefersdarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false)
}

export default useDarkMode
