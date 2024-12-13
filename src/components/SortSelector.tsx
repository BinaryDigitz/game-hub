import { useContext, useState } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
interface Props{
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string | null;
}
function SortSelector({onSelectSortOrder, sortOrder}: Props) {

    const [showList, setShowList] = useState(false);
    const themeContext = useContext(ThemeContext);
    const selectors =[
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritics', label:'Popularity'},
        {value:'-rating', label:'Average rating'},
    ]
    const currentSortOrder = selectors.find(selector => selector.value === sortOrder)
    const listClass =
      "hover:opacity-80 cursor-pointer hover:shadow-md active:translate-y-1 w-full trans py-1";
    function handleShowlist() {
      setShowList(!showList);
    }
    
    return (
      <div className={`${themeContext?.colorMode.color} p-2 relative trans`}>
        <button
          onClick={handleShowlist}
          className={`${themeContext?.colorMode.sideColor} px-6 py-2 rounded-md shadow-md`}
        >
          Order by: {currentSortOrder?.label ? `${currentSortOrder?.label}` : 'Relevance'}  
        </button>
        <ul
          onClick={handleShowlist}
          className={`${themeContext?.colorMode.sideColor} ${
            !showList && "hidden"
          } w-48 p-3 ml-3 absolute top-14 rounded-md shadow-md left-0 
           `}
        >
            {selectors.map((selector) => (
                <li onClick={() => onSelectSortOrder(selector.value)} value={selector.value} key={selector.value} className={`${listClass}`}>
                {selector.label}
                </li>
            ))}
        </ul>
      </div>
    );
}

export default SortSelector
