import styles from './App.module.css';

import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About/About';
import { Experience } from './pages/Experience/Experience';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { Education } from './pages/Education/Education';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ProjectModal } from './components/ProjectModal/ProjectModal';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ProjectModal />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
