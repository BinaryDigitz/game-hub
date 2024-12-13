import type { Game, Platform } from "../types/GameTypes";
import useData from "./useData";
import { Genre } from "./useGenres";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, sortOrder: string | null) => 
    useData<Game>("/games", {
        params:{
              genres: selectedGenre?.id,
              platforms: selectedPlatform?.id,
              ordering: sortOrder} ,
              
            }, [selectedGenre?.id, selectedPlatform?.id, sortOrder]  )

export default useGames
