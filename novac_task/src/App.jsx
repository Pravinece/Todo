import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
     <div>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:id" element={<Home/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
       </Routes>
       </BrowserRouter>
     </div>
    </>
  )
}

export default App
