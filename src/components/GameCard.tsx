
interface Game{
    id: number;
    name: string;
    background_image: string
}
interface Props{
    game: Game
}

function GameCard( {game}: Props) {
  return (
    <div className="w-[300px] rounded-lg m-3 shadow-md overflow-hidden">
        <img src={game.background_image}  alt="" />
        <div className="p-2 bg-slate-950">
            <h2 className="text-xl">{game.name}</h2>
        </div>
      
    </div>
  )
}

export default GameCard
