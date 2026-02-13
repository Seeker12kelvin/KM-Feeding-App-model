import React from 'react'
import "./Home.module.css"
import Dining_Pic from "../../../public/Group.png"
import { motion } from 'framer-motion'
import { FaNairaSign } from "react-icons/fa6";

const Home = () => {


  const restaraunts = [
    {
      img: Dining_Pic,
      name: "Main Cafeteria",
      open: true,
      menu: "Rice, Swallow, Beans,....",
      price: "800-2500"
    },
    {
      img: Dining_Pic,
      name: "Main Cafeteria",
      open: true,
      menu: "Rice, Swallow, Beans,....",
      price: "800-2500"
    },
    {
      img: Dining_Pic,
      name: "Main Cafeteria",
      open: true,
      menu: "Rice, Swallow, Beans,....",
      price: "800-2500"
    }
  ]

  return (
    <motion.main
      initial={{x: 100, opacity: 0 }}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.5, ease: "easeIn"}}
      className='w-full min-h-fit bg-transparent px-8 m-0 flex flex-col gap-4'>
        <section className='w-full h-fit flex flex-col text-white'>
          <h3 className='text-lg'>Good Afternoon Kelvin!</h3>

          <div 
          className='text-6xl flex items-center justify-center rounded-2xl p-5 text-white bg-linear-to-b from-[#1A1A1A] to-[#C0C0C0] w-full max-w-sm h-44 mx-auto'>
            <span className='flex items-center font-bold'> <FaNairaSign /> 12,500</span>
          </div>
        </section>

        <section className='text-white mt-5 flex flex-col gap-4 w-full h-fit'>
          <h2 className='text-2xl'>Cafeteria</h2>
          <p className='text-sm'>Tap on the Restaurant of your choice</p>

          <div className='overflow-scroll h-full flex items-center w-full gap-10'>

            {restaraunts.map((data, index) => (
              <div key={index} className='border-2 border-[#C0C0C0] bg-[#1A1A1A] h-fit w-80 shrink-0 pb-10 rounded-2xl shadow-md shadow-[#C0C0C0]'>
                <div className='border-b-2 border-[#C0C0C0] h-50 flex flex-col justify-between rounded-b-[4rem] py-5 px-10'>
                  <img
                    className='h-25 mx-auto'
                    src={data.img}
                    alt='logo'/>
                  <p className='text-center text-lg'>{data.name}</p>
                </div>

                <div className='w-full mx-auto text-center flex flex-col gap-4 mt-4'>
                  <p>{data.open ? "Open Now" : "Closed"}</p>
                  <p>{data.menu}</p>
                  <p>Price Rnage: {data.price}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* <section className='w-full border-2 rounded-xl border-[#C0C0C0] h-10 text-white px-10 py-7 text-2xl'>
          <nav className='w-full h-full'>
            <ul className='w-full h-full flex justify-between items-center'>
              <li><GoHome /></li>
              <li><HiArchive /></li>
              <li><MdPerson /></li>
            </ul>
          </nav>
        </section> */}
    </motion.main>
  )
}

export default Home