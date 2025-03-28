import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About'
import Widgets from './pages/Widgets'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import HomeSectionContentPages from './components/HomeSectionContentPages/HomeSectionContentPages'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Router basename={process.env.NODE_ENV === 'production' ? '/portfolio' : '/'}>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/widgets" element={<Widgets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<HomeSectionContentPages title="This page is not found" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </StyledEngineProvider>
  )
}

export default App
