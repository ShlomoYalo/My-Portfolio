
import styles from './App.module.css'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Contact } from './components/Contact/Contact'

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
}

export default App
