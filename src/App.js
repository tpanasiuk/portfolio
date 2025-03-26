import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'
import Products from './pages/Products'

const NotFound = () => <h2 style={{ padding: '100px', textAlign: 'center' }}>This page is in development</h2>

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Router basename={process.env.NODE_ENV === 'production' ? '/aironepage_react' : '/'}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </StyledEngineProvider>
  )
}

export default App
