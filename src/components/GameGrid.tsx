import { useContext } from "react";
import useGames from "../hooks/useGames";
import { ThemeContext } from "../providers/ThemeProvider";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const themeContext = useContext(ThemeContext);
  const { games, error, isLoading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={themeContext?.colorMode.color}>
      {error && <p className="text-danger">{error}</p>}
      <div className="grid place-items-center grid-cols-1 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 ">
      { isLoading && skeletons.map(i => <GameCardSkeleton key={i} />) }
      {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
