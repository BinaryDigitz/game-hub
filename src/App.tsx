import { GameGrid, GenreList, NavBar } from "./components/exportComp";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider";
import "./App.css";
import { useContext, useState } from "react";
import { Genre } from "./hooks/useGenres";
function App() {
  const themeContext = useContext(ThemeContext)
  const [selectedGenre, setSelectedGenre] = useState< Genre | null>(null)
  return (
    <ThemeProvider>
      <div id="app">
        <header id="header">
          <NavBar />
        </header>
        <main id="main" className={`${themeContext?.colorMode.color} trans`}>
           <GameGrid selectedGenre={selectedGenre}/>
          </main>
        <aside id="aside" className={`hidden lg:block  ${themeContext?.colorMode.sideColor}`}>
          <GenreList onSelectGenre ={(genre) => setSelectedGenre(genre)} />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
 