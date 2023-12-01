
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Contact from './containers/contact'
import Skills from './containers/skills'






function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>

    </>

  )

}

export default App
