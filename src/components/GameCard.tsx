import type { Game } from "../types/GameTypes";
import { CriticScore, GameCardContainer, PlatformIconList } from "./exportComp";
import getCroppedImageUrl from "../services/image-url";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";
import Emoji from "./Emoji";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const themeContext = useContext(ThemeContext)
  return (
   <GameCardContainer>
      <div className={`${themeContext?.colorMode.cardColor}`}>
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="object-cover"
      />
      <div className="px-3 py-1 h-full">
        <span className="flex gap-4 justitfy-between items-center p-2">
          <PlatformIconList platforms={game.parent_platforms.map( p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </span>
        <span className="px-2 font-bold text-lg text-no-wrap">{game.name} <Emoji rating={game.rating_top}/></span>
      </div>
      </div>
    </GameCardContainer>
  );
}

export default GameCard;
