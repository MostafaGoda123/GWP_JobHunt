import React from 'react'
import bg from '../Assets/images/cool-background.png'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <main className='mainHome w-full h-[85vh] md:h-[90vh] flex flex-col gap-8 justify-center items-center text-white' style={{backgroundImage:`url(${bg})`,backgroundSize:'cover',backgroundPosition: 'center',backgroundClip:'content-box'}} >
         <h1 className='-mb-4 text-2xl md:text-4xl lg:text-6xl font-semibold'>Find the <span className='text-yellow-500'>Right Job</span> In the</h1>
         <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold text-yellow-500'>Right Companies</h1>
         <p className='text-lg text-neutral-200'>Got fired..!! Get Ready to be hired</p>
         <Link to={'/jobs'} className='text-xl border-2 border-yellow-500 py-3 px-6 rounded-xl font-semibold duration-300 hover:text-black hover:bg-yellow-500'>Browse Jobs</Link>
      </main>
   )
}

export default Home
