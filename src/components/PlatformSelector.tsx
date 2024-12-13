import { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../types/GameTypes";
interface Props{
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}
function PlatformSelector({onSelectPlatform, selectedPlatform}: Props) {

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
        {selectedPlatform ? selectedPlatform.name : "Select Platform"}
      </button>
      <ul
        onClick={handleShowlist}
        className={`${themeContext?.colorMode.sideColor} ${
          !showList && "hidden"
        } w-48 p-3 ml-3 absolute top-14 rounded-md shadow-md left-0 
         `}
      >
        {data.map((platform) => (
          <li onClick={() => onSelectPlatform(platform)} key={platform.id} className={`${listClass}`}>
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlatformSelector;
