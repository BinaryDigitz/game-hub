import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
interface Game{
    id: number;
    name: string;
}
interface FetchGameType{
    count:number;
    results: Game[]
}
function GameGrid() {
   const [games, setGames] = useState<Game[]>([])
   const [error, setError] = useState('')
 

   useEffect(() =>{
    apiClient.get<FetchGameType>("/games")
    .then( response => setGames(response.data.results))
    .catch(err => setError(err.message))
   },[])
   if(error){
    return
   }
  return (
    <>
    { error &&  <p className='text-danger'>{error}</p>}
    
    <ul>
        {
            games.map(game => <li key={game.id}>{game.name}</li>)
        }
    </ul>
    </>
  )
}

export default GameGrid
