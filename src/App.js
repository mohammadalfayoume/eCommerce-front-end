import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import HomeSecreen from './secreens/HomeSecreen'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductSecreen from './secreens/ProductSecreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeSecreen />} exact />
            <Route path='/product/:id' element={<ProductSecreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
