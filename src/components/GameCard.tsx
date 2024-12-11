import type { Game } from "../types/GameTypes";
import { CriticScore, PlatformIconList } from "./exportComp";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <div className=" p-4 md:w-[300px] md:h-[300px] rounded-lg m-3 shadow-md overflow-hidden">
      <img src={getCroppedImageUrl(game.background_image)} alt="" />
      <div className="p-2 bg-slate-950">
        <h2 className="text-xl">{game.name}</h2>
        <div className="flex  justify-between items-center">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
