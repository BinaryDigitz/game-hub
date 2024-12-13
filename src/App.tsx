import {
  GameGrid,
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
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <ThemeProvider>
      <div id="app" className={`${themeContext?.colorMode.color}  `}>
        <header id="header">
          <NavBar />
        </header>
        <main id="main" className={`${themeContext?.colorMode.color} trans`}>
        <div className={`${themeContext?.colorMode.sideColor} trans grid grid-cols-2 `}>
          <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector />
        </div>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
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
