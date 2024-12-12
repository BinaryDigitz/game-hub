import type { Game } from "../types/GameTypes";
import { CriticScore, GameCardContainer, PlatformIconList } from "./exportComp";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
   <GameCardContainer>
      <div className="w-full h-full">
      <img
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className="min-h-100 min-w-200 bg-white"
      />
      <div className="bg-[#00001c]">
        <h2 className="p-2 ">{game.name}</h2>
        <h4 className="flex gap-4 justitfy-between items-center p-2">
          <PlatformIconList platforms={game.parent_platforms.map( p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </h4>
      </div>
      </div>
    </GameCardContainer>
  );
}

export default GameCard;
