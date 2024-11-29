import { NavBar } from "./components/exportComp"
import "./App.css"
function App() {
  return (
    <div id="app">
      <header id="header">
        <NavBar/>
      </header>
      <main id="main">main</main>
      <aside id="aside" className="hidden lg:block">aside</aside>
      
    </div>
  )
}

export default App
