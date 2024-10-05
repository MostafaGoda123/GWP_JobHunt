import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/images/logo.png'

const Navbar = () => {
   return (
      <nav>
         <div className="container flex flex-col md:flex-row justify-evenly md:justify-between items-center h-[15vh] md:h-[10vh]">
            <Link to={'/'} className='text-3xl font-semibold flex items-center' ><img src={logo} alt="" className='w-10 h-10 rounded-full me-2' />Job<span className='text-yellow-500'>Hunt</span></Link>
            <ul className='flex gap-4 md:gap-8 items-center font-semibold text-xl'>
               <li><Link className='duration-300 hover:text-yellow-500' to={'/'}>Home</Link></li>
               <li><Link className='duration-300 hover:text-yellow-500' to={'/jobs'}>Jobs</Link></li>
               <li><Link className='duration-300 hover:text-yellow-500' to={'/postJob'}>PostJob</Link></li>
               <li><Link className='duration-300 hover:text-yellow-500' to={'/savedJob'}>SavedJob</Link></li>
            </ul>
         </div>
      </nav>
   )
}

export default Navbar
