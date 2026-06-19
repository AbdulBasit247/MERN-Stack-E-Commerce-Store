import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Verify from './pages/Verify'
import VerifyEmail from './pages/VerifyEmail'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Product from './pages/Product'

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
  },
  {
    path: '/verify/:token',
    element: <VerifyEmail />
  },
  {
    path: '/profile/:userId',
    element: <><Navbar /><Profile/></>
  },
  {
    path: '/products',
    element: <><Navbar /><Product /><Footer/></>
  },
])


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
