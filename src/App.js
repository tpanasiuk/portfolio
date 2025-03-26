import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import NotFound from './components/NotFound/NotFound'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Router basename={process.env.NODE_ENV === 'production' ? '/aironepage_react' : '/'}>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/widgets" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </StyledEngineProvider>
  )
}

export default App
