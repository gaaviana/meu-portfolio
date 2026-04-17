import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold p-10">
        Meu Portfólio 🚀
      </h1>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App


