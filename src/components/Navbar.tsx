import { useContext } from "react";
import logo from "../assets/logo.webp";
import { ThemeContext } from "../providers/ThemeProvider";
import {ColorModeSwitch} from "./exportComp";


function Navbar() {
  const themeContext = useContext(ThemeContext);

  return (
    <nav className={`px-2 py-4 h-16 flex items-center justify-between ${themeContext?.colorMode.navbarColor} trans`}>
      <div className="logo p-1 ">
        <img src={logo} alt="logo" className="size-14" />
      </div>
      <div>Search</div>
      <ColorModeSwitch/>
    </nav>
  );
}

export default Navbar;
