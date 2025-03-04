import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import Register from './containers/Register'
import Login from './containers/Login'

import Globalstyles from './styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Register />
    <ToastContainer autoClose={2000} />
    <Globalstyles />
  </>
)
