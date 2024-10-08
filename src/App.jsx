import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

import { Header } from './Components/PageDetails/Header'
import { Footer } from './Components/PageDetails/Footer'

import { NotFound } from './Pages/NotFound'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
