import { useContext } from "react";
import logo from "../assets/logo.webp";
import { Button } from "../utilities/exportUtilities";
import { ThemeContext } from "../providers/ThemeProvider";


function Navbar() {
  const themeContext = useContext(ThemeContext);


  return (
    <nav className={`h-14 flex items-center justify-between ${themeContext?.colorMode.color}`}>
      <div className="logo p-1">
        <img src={logo} alt="logo" className="size-14" />
      </div>
      <div>Search</div>
      <div className="pr-2">
        <Button className="btn btn-primary" onClick={themeContext?.toggleTheme}>Change</Button>
      </div>
    </nav>
  );
}

export default Navbar;
