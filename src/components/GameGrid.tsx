import { useContext } from "react";
import useGames from "../hooks/useGames";
import { ThemeContext } from "../providers/ThemeProvider";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../types/GameTypes";

interface Props{
  selectedGenre:Genre | null;
  selectedPlatform:Platform | null;
  sortOrder?: string | null;
  searchText?: string | null;
}
function GameGrid({selectedGenre, selectedPlatform, sortOrder, searchText} : Props) {
  
  const themeContext = useContext(ThemeContext);
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform, sortOrder, searchText);
  const skeletons = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={themeContext?.colorMode.color}>
      {error && <p className="text-danger">{error}</p>}
      <div className="grid place-items-center grid-cols-1 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 ">
      { isLoading && skeletons.map(i => <GameCardSkeleton key={i} />) }
      {data.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
