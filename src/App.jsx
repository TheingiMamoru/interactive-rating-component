import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Feedback from './components/Feedback'
import Thankyou from './components/Thankyou'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen font-overpass bg-very-dark-blue'>
      <Routes>
        <Route path='/' element={<Feedback/>}/>
        <Route path='thankyou/:rate' element={<Thankyou/>}/>
      </Routes>
    </div>
  )
}

export default App