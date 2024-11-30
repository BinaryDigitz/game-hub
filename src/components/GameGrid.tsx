import { useContext } from "react";
import useGames from "../hooks/useGames";
import { ThemeContext } from "../providers/ThemeProvider";
import GameCard from "./GameCard";

function GameGrid() {
  const themeContext = useContext(ThemeContext);
  const { games, error } = useGames();

  return (
    <div className={themeContext?.colorMode.color}>
      {error && <p className="text-danger">{error}</p>}
      <div className="grid place-items-center grid-cols-1 2xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 ">
      {games.map((game) => (
          <GameCard key={game.id} game={game}/>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
