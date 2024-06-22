import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CheckoutSuccess from './components/CheckoutSuccess'
import NotFound from './components/NotFound'
import Home from './components/Home';
import Chat from './components/Chat';


const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout-success' element={<CheckoutSuccess />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App