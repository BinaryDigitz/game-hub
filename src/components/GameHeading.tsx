import { useContext } from "react";
import { Genre } from "../hooks/useGenres";
import { ThemeContext } from "../providers/ThemeProvider";
import { Platform } from "../types/GameTypes"


interface Props{
    platform: Platform | null;
    genre: Genre | null;
}
function GameHeading({platform, genre}: Props) {
    const themeContext = useContext(ThemeContext)
    const heading = `${platform ? platform.name : ""} ${genre ? genre.name : ""} Games`
  return <h1 className={`text-3xl font-bold p-3 ${themeContext?.colorMode.color} trans`}>
        {heading}
  </h1>
}

export default GameHeading
