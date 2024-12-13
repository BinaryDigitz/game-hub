import type { Game, Platform } from "../types/GameTypes";
import useData from "./useData";
import { Genre } from "./useGenres";

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => 
    useData<Game>("/games", {
        params:{
              genres: selectedGenre?.id,
              platforms: selectedPlatform?.id} 
            }, [selectedGenre?.id, selectedPlatform?.id]  )

export default useGames
