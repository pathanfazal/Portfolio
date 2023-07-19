import Navbar from './sections/navbar/Navbar';
import Header from './sections/Header/Header';
import About from './sections/About/About';
import Projects from './sections/project/Projects';
import Skills from './sections/skills/Skills';
import Education from './sections/Education/Education';
import Footer from './sections/footer/Footer';;

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Footer/>    
    </main>
  )
}

export default App