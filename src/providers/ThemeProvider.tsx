import React, { createContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | null | string;

interface ThemeProps {
  theme: Theme;
  toggleTheme: () => void;
  colorMode:{color:string, forGround: string}
}
type PropsType = {
  children: React.ReactNode;
};
export const ThemeContext = createContext<ThemeProps | undefined>(undefined);

function ThemeProvider({ children }: PropsType) {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem("theme"));

  const lightMode = {color: "bg-white text-black", forGround:"text-black"}
  const darkMode = {color: "bg-black text-white", forGround: "text-white"}

 const colorMode = theme === "light" ? lightMode : darkMode
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
