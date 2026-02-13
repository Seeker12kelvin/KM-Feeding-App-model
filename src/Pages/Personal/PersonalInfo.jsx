import React from 'react'
import "./PersonalInfo.module.css"
import { Link } from 'react-router-dom'

const PersonalInfo = () => {

  const tabs = [
    {
      name: "My Orders"
    },
    {
      name: "Notifications"
    },
    {
      name: "Help & Support"
    },
    {
      name: "Log Out"
    }
  ]

  return (
    <main className='w-full min-h-fit bg-transparent px-8 m-0 flex flex-col gap-4'>
      <section className='flex gap-2 border border-white rounded-l-full'>
        <div className='px-8 py-12 h-fit border border-white rounded-full w-fit float-left'>
          <h1 className='text-6xl text-white'>MD</h1>
        </div>

        {/* These will be dynamically rendered from a database later on */}
        <div className='flex flex-col gap-3 self-center'>
          <p className='text-md text-white -ml-5'>Name: Mike Davidson</p>
          <p className='text-md text-white'>Matric: 1234567</p>
          <p className='text-md text-white'>Faculty: Science</p>
          <p className='text-md text-white -ml-5'>Department: Nursing</p>
        </div>
      </section>

      <section className='flex flex-col h-fit gap-5'>
        {tabs.map((data, index) => (
          <Link key={index} 
            className='rounded-2xl w-full h-10 bg-[#1A1A1A] p-10 py-15 flex gap-4 items-center text-white'>
            <div className='bg-[#C0C0C0] h-7 w-7 rounded-full'>
            </div>
            <h2 className='text-2xl'>{data.name}</h2>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default PersonalInfo