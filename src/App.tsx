import { GameGrid, GenreList, NavBar } from "./components/exportComp";
import ThemeProvider, { ThemeContext } from "./providers/ThemeProvider";
import "./App.css";
import { useContext } from "react";
function App() {
  const themeContext = useContext(ThemeContext)
  return (
    <ThemeProvider>
      <div id="app">
        <header id="header">
          <NavBar />
        </header>
        <main id="main" className={`${themeContext?.colorMode.color} trans`}>
           <GameGrid/>
          </main>
        <aside id="aside" className={`hidden lg:block  ${themeContext?.colorMode.sideColor}`}>
          <GenreList />
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
 