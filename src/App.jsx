import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Work from "./components/Work"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App
