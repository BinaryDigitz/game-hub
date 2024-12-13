import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";


function SearchInputs() {
    const themeContext = useContext(ThemeContext);
    const color = {
        icon: themeContext?.theme === 'dark' ? "#f0f0f0" : "#00001c",
         input: themeContext?.theme === 'light' ? "bg-slate-100" : "bg-slate-900"
        } 
   
  return <div className="flex items-center  relative">
    <p className=" absolute pl-1 rounded-md  "><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={color.icon}><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></p>
    <input type="text" placeholder="eg. God of war" className={`border-none px-10 py-2 rounded-md shadow-md ${color.input}`} />
  </div>
}

export default SearchInputs
