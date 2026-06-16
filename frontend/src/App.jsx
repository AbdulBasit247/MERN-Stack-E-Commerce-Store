import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /><Footer/></>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/verify',
    element: <Verify />
  }
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
