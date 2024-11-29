import { NavBar } from "./components/exportComp";
import ThemeProvider from "./providers/ThemeProvider";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <div id="app">
        <header id="header">
          <NavBar />
        </header>
        <main id="main">main</main>
        <aside id="aside" className="hidden lg:block">
          aside
        </aside>
      </div>
    </ThemeProvider>
  );
}

export default App;
