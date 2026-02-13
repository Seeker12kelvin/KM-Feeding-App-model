import React from 'react'
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { motion } from 'framer-motion'

const Login = () => {

  const logIn = async (e) => {
    e.preventDefault()
    
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(email)
      console.log("Sign In Successful:", userCredential.user);
    } catch (error) {
      console.log("Error signing in:", error.message);
      console.log(email)
    }
  }

  return (
    <form
      onSubmit={logIn}
      className={`${styles['Feeding-sign-in-form']} flex flex-col -mt-5 gap-8`}
    >
      <motion.div
        className='w-full h-full flex flex-col gap-8'
        initial={{width: '0%'}}
        animate={{width: "100%"}}
        transition={{ duration: 0.5, ease: "easeIn"}}>

        <input name='full-name' type="text" placeholder='Full Name'/>
        <input name='email' type="email" placeholder='Email'/>
        <input name='password' type="password" placeholder='Password'/>

      </motion.div>

      <button
        className='w-full bg-[#C0C0C0] mx-auto py-3 rounded-2xl'
        type='submit'>
        Sign In
      </button>

        <p className='text-white text-center'>
          Don’t have an account?
          <Link to={'/sign-up&login'}>Sign Up</Link>
        </p>
    </form>
  )
}

export default Login