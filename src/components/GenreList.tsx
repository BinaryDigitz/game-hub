import useGenres, { Genre } from "../hooks/useGenres";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface Props{
  onSelectGenre: (genre: Genre) => void;
}
function GenreList({onSelectGenre}:Props) {
  const themeContext = useContext(ThemeContext);
  const { data, isLoading, error } = useGenres();
 
  if(error) return null;
  if (isLoading) return <p className={` h-screen text-center text-lg ${themeContext?.colorMode.sideColor}`}>Loading....</p>;
  return (
   <div className={themeContext?.colorMode.sideColor}>
    <h2 className="font-bold text-xl p-2">Genres</h2>
     <ul>
      {data.map((genre) => (
        <li key={genre.id}>
          <button onClick={() => onSelectGenre(genre)} className={`flex gap-2 p-2 hover:cursor-pointer hover:shadow-md active:translate-y-2 w-full ${themeContext?.colorMode.sideColor} hover:translate-x-1 trans`}>
            <img src={genre.image_background} className="size-8 rounded-sm " alt="" />
            <p className="text-no-wrap text-left">{genre.name}</p>
          </button>
        </li>
      ))}
    </ul>
   </div>
  );
}
export default GenreList;
