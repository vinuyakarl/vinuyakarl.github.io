import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Sidebar from "./components/Sidebar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

function App() {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Sidebar/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
