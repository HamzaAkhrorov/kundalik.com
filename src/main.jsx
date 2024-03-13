import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cards from './Cards.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './i18.js'
import HomePage from './HomePage.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Cards/>
    {/* <App/> */}
  </BrowserRouter>,
)
