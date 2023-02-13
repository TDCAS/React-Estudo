import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './componets/index'
import Cadastro from './componets/cadastro/cadastro.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />,
          <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
