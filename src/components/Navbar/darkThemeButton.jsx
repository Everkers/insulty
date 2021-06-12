import React from "react"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"
const DarkThemeButton = () => {
  const [theme, setTheme] = React.useState(localStorage.theme)
  const toggle = () => {
    const currentTheme = localStorage.theme
    if (currentTheme === "dark") {
      setTheme("light")
      localStorage.theme = "light"
      document.documentElement.classList.remove("dark")
    } else {
      setTheme("dark")
      localStorage.theme = "dark"
      document.documentElement.classList.add("dark")
    }
  }
  return (
    <div
      onClick={toggle}
      class='text-gray-800 w-5 h-5 mx-5 cursor-pointer dark:text-gray-50'>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </div>
  )
}
export default DarkThemeButton
