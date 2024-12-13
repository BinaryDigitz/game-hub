import { useContext, useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { ThemeContext } from "../providers/ThemeProvider";


function SortSelector() {
    const { data, error } = usePlatforms();
    const [showList, setShowList] = useState(false);
    const themeContext = useContext(ThemeContext);
    const listClass =
      "hover:opacity-80 cursor-pointer hover:shadow-md active:translate-y-1 w-full trans py-1";
    function handleShowlist() {
      setShowList(!showList);
    }
    if (error) return null;
    return (
      <div className={`${themeContext?.colorMode.color} p-2 relative trans`}>
        <button
          onClick={handleShowlist}
          className={`${themeContext?.colorMode.sideColor} px-6 py-2 rounded-md shadow-md`}
        >
          {'Order by: Relevance'}
        </button>
        <ul
          onClick={handleShowlist}
          className={`${themeContext?.colorMode.sideColor} ${
            !showList && "hidden"
          } w-48 p-3 ml-3 absolute top-14 rounded-md shadow-md left-0 
           `}
        >
         
            <li className={`${listClass}`}>Relevance</li>
            <li className={`${listClass}`}>Date added</li>
            <li className={`${listClass}`}>Name</li>
            <li className={`${listClass}`}>Release date</li>
            <li className={`${listClass}`}>Popularity</li>
            <li className={`${listClass}`}>Average rate</li>
          
        </ul>
      </div>
    );
}

export default SortSelector
