import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignUp from '../Pages/Sign-Up/SignUp'
import LoginLayout from './SignUp&LoginLayout'
import Login from '../Pages/Login/Login'
import Loading from './Loading'
import PersonalInfo from '../Pages/Personal/PersonalInfo'

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Loading />,
      errorElement: <div>Page does not exist...</div>
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/personal-info',
      element: <PersonalInfo />
    },
    {
      path: '/sign-up&login',
      element: <LoginLayout />,
      children: [
        {
          index: true,
          element: <SignUp />
        },
        {
          path: 'login',
          element: <Login />
        }
      ]
    }
  ])


export default router