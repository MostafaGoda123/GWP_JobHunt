import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div className='bg-black fixed top-0 left-0 w-full h-full flex justify-center items-center flex-col text-yellow-500 gap-8'>
         <h1 className='text-9xl text-white'>404</h1>
         <p className='text-xl'>Page Not Found</p>
         <Link to={'/'} className='text-xl border-2 border-yellow-500 py-3 px-6 rounded-xl font-semibold duration-300 hover:text-black hover:bg-yellow-500'>Go To Home</Link>
      </div>
   )
}

export default NotFound
