import React from 'react'
import Logo from './Logo'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Loading = () => {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/home')
  }

  return (
    <motion.div
    className='w-full h-screen flex items-center justify-center'
    animate={{rotate: 360}}
    transition={
      {
        duration: 2,
        ease: "easeInOut"
      }
    }
    onAnimationComplete={handleRoute}>
      <Logo size={'h-40'} />
    </motion.div>
  )
}

export default Loading