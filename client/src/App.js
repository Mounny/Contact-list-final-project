import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './Pages/Add'
import Contact from './Pages/Contact'
import Edit from './Pages/Edit'
import Errors from './Pages/Errors'
import Home from './Pages/Home'

function App() {
  return (
    <div className='App'>
      <h1>MERN APP</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<Errors />} />
      </Routes>
    </div>
  )
}

export default App
