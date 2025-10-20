import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home'
import { Contact } from './Pages/Contact'
import { About } from './Pages/About'
import { Features } from './Pages/Features'
import { NotFound } from './Pages/NotFound'

import { Header } from './Components/PageDetails/Header'
import { Footer } from './Components/PageDetails/Footer'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
