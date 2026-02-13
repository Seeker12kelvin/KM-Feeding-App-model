import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from "./Logo"

const LoginLayout = () => {
  return (
    <main className='h-full w-full max-sm:min-h-screen bg-transparent px-10 flex flex-col'>
      <Logo size={'scale-60'}/>

      <Outlet />
    </main>
  )
}

export default LoginLayout