
import { Route, Routes } from 'react-router-dom'
import Particles from "react-particles";
import { loadFull } from "tsparticles";



 import './App.css'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Contact from './containers/contact'
import Skills from './containers/skills'
import Navbar from './composants/navbar'
import particles from './utils/particles'







function App() {


const handleInit = async (engine) => {

  await loadFull(engine);
};



  return (
    <div className="App">
    <Particles id="particles" init={handleInit} options={particles} />
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>

    </div>

  )

}

export default App
