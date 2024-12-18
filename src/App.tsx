import {
  GameGrid,
  GameHeading,
  GenreList,
  NavBar,
  PlatformSelector,
  SortSelector,
} from "./components/exportComp";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider";
import "./App.css";
import { useContext, useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./types/GameTypes";

function App() {
const themeContext = useContext(ThemeContext);
 const [sortOrder, setSortOrder ] = useState<string | null>(null);
 const [searchText, setSearchText ] = useState<string | null>(null);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  
  
  return (
    <ThemeProvider>
      <div id="app" className={`${themeContext?.colorMode.color}  trans`}>
        <header id="header">
          <NavBar onSearch={(text) => setSearchText(text)}/>
        </header>
        <main id="main" className={`${themeContext?.colorMode.color} trans`}>
          <GameHeading genre={selectedGenre} platform={selectedPlatform}/>
        <div className={`${themeContext?.colorMode.sideColor} trans grid grid-cols-2 `}>
          <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector sortOrder={sortOrder} onSelectSortOrder={(sortOrder) => setSortOrder(sortOrder)} />
        </div>
          <GameGrid
          sortOrder={sortOrder}
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            searchText={searchText}
          />
        </main>
        <aside
          id="aside"
          className={`hidden lg:block  ${themeContext?.colorMode.sideColor}`}
        >
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
