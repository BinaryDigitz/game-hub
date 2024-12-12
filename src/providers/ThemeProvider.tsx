import React, { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Theme = "dark" | "light" | null | string;

interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
  colorMode: {
    color: string;
    forGround: string;
    sideColor: string;
    navbarColor: string;
    cardColor:string;
    highrachy: string;
  };
}
type PropsType = {
  children: React.ReactNode;
};
export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

function ThemeProvider({ children }: PropsType) {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme"));

  const lightMode = {
    sideColor: "bg-[#f0f0f0] text-[#00001c]",
    color: "bg-white text-black",
    forGround: "text-black",
    navbarColor: "bg-[#f0f0f0] text-[#00001c]",
    cardColor: "bg-[#f0f0f0] text-[#00000f]",
    highrachy:"text-white"
  };
  const darkMode = {
    color: "bg-black text-white",
    forGround: "text-white",
    sideColor: "bg-[#00001c] text-[#eee]",
    navbarColor: "bg-[#00001c] text-[#eee]",
    cardColor: "bg-[#00000a] text-[#eee]",
    highrachy:"text-black"
  };

  const colorMode = theme === "light" ? lightMode : darkMode;
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme !== "dark" || "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(localStorage.getItem("theme"));
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const values = { theme, colorMode, toggleTheme };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
