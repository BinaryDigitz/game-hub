import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { Game } from "../types/GameTypes";

interface FetchGameType{
    count:number;
    results: Game[]
}

function useGames() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')
    const [ isLoading, setIsLoading] = useState(false)
  
 
    useEffect(() =>{
        const controller = new AbortController()
        setIsLoading(true)
     apiClient.get<FetchGameType>("/games", { signal:controller.signal})
     .then( (response )=> {
        setGames(response.data.results)
        setIsLoading(false)
     })
     .catch(err => {
        if(err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        
        return () => controller.abort()
     })
    },[])

    return { games, error, isLoading}
}

export default useGames
