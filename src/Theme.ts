import { useState } from "react"
type ColorType = "dark" | "light" | "system"

function Theme() {
    const colorMode = {
        prefersColor: "dark",
        selectedColor: "light"
    }
  const [ theme, setTheme ] = useState("dark")

}

export default Theme
