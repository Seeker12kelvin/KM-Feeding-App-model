import styles from "./SignUp.module.css"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { motion } from "framer-motion";

const SignUp = () => {

  const signUp = async (e) => {

    e.preventDefault()

    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(email)
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.log("Error signing up:", error.message);
    }
  }

  return (

    <>
      <form
        onSubmit={signUp}
        className={`${styles['Feeding-form']} flex flex-col -mt-5 gap-8`}
      >
        <motion.div
          className="w-full h-full flex flex-col gap-8"
          initial={{width: '0rem'}}
          animate={{width: "100%"}}
          transition={{ duration: 0.5, ease: "easeIn"}}>

          <input type="text" name="name" placeholder="Full name" />
          
          <input type="number" name="number" placeholder="Matric Number" />

          <input type="email" name="email" placeholder="Email" />

          <div className='flex w-full justify-between items-center gap-20'>
            <select name="faculty">
              <option value="Faculty">Faculty</option>
            </select>
            <select name="department">
              <option value="department">Department</option>
            </select>
          </div>

          <input type="password" name="password" placeholder="Password" />
          
          <input type="password" name="confirm-password" placeholder="Confirm password" />

        </motion.div>

          <label className='flex items-center text-white gap-2'>
            <input type="checkbox"/>
            I agree to the Terms and Conditions
          </label>

          <button 
            className='w-full bg-[#C0C0C0] mx-auto py-3 rounded-2xl'
            type='submit'>Create Account</button>
      </form>
    </>

  )
}

export default SignUp