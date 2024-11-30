import { useContext } from "react";
import useGames from "../hooks/useGames";
import { ThemeContext } from "../providers/ThemeProvider";

function GameGrid() {
  const themeContext = useContext(ThemeContext);
  const { games, error } = useGames();

  return (
    <div className={themeContext?.colorMode.color}>
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameGrid;
