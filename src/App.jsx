import Header from './components/Header'
import Profile from './components/Profile'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Awards from './components/Awards'
import Declaration from './components/Declaration'

function App() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white min-h-screen">
      <div className="space-y-8">
        <Header />
        <Profile />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Awards />
        <Declaration />
      </div>
    </div>
  )
}

export default App 