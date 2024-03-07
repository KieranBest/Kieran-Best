import styles from "./App.module.css";
import { About } from "./components/About/About.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App
