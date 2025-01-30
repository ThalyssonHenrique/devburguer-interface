import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './containers/Login'
import Globalstyles from './styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Login />
    <Globalstyles />
  </>
)
