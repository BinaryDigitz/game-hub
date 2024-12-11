import type { Game } from "../types/GameTypes"
import { PlatformIconList } from "./exportComp"
interface Props{
    game: Game
}

function GameCard( {game}: Props) {
  return (
    <div className=" p-4 md:w-[300px] md:h-[300px] rounded-lg m-3 shadow-md overflow-hidden">
        <img src={game.background_image}  alt="" />
        <div className="p-2 bg-slate-950">
            <h2 className="text-xl">{game.name}</h2>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </div>
      
    </div>
  )
}

export default GameCard
