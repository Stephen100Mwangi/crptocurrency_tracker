/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CryptoCurrencies from './pages/CryptoCurrencies'
import Exchanges from './pages/Exchanges'
import Details from './pages/Details'
import Footer from './components/Footer'
import News from './pages/News'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='flex'>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/crypto' element={<CryptoCurrencies />}></Route>
          <Route exact path='/exchange' element={<Exchanges />}></Route>
          <Route exact path='/details/coin/:id' element={<Details />}></Route>
          <Route exact path='/news' element={<News />}></Route>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App