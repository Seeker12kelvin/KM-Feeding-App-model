import React from 'react'
import App_Logo from "../../public/App-Logo.png"

const Logo = ({size}) => {
  return (
    <img
      className={size}
      src={App_Logo}
      alt='logo'/>
  )
}

export default Logo