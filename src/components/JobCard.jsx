import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa';
import { JobContext } from '../context.jsx/jobContext';

const JobCard = ({ job }) => {

   let {likedJobs,setLikedJobs,} = useContext(JobContext)

   function handleLikedJobs() {
      let newLikedJobs = [...likedJobs] ; 
      if (newLikedJobs.includes(job.id)) {
         newLikedJobs = newLikedJobs.filter((item) => item !== job.id)
      }else {
         newLikedJobs = [...newLikedJobs , job.id] 
      }
      setLikedJobs(newLikedJobs);
   }

   return (
      <div className='bg-white rounded-xl flex items-center gap-5 p-5 shadow duration-300 hover:shadow-xl cursor-pointer hover:scale-105 text-sm md:text-xl'>
         <div className='flex flex-col items-center gap-5'>
            <img src={job.logo} alt="" className='w-10 h-10 md:w-20 md:h-20' />
            <div className='flex md:hidden gap-2 '>
               <Link to={'/applyJob'} className='duration-300 border-2 text-white border-indigo-500 py-1 px-2 md:py-2 md:px-4 rounded-xl font-semibold hover:text-indigo-500 hover:bg-white bg-indigo-500'>Browse Jobs</Link>
               <button className='text-xl cursor-pointer text-indigo-500' onClick={()=>handleLikedJobs()} >{likedJobs.includes(job.id)?<FaHeart />:<CiHeart />}</button>
            </div>
         </div>
         <div className='flex-1 flex flex-col gap-1 md:gap-2'>
            <h2 className=' font-semibold text-indigo-500 '>{job.company}</h2>
            <h2 className=' font-semibold '>{job.position}</h2>
            <p className=' text-neutral-500'>{job.experience} year experiences</p>
            <div className='flex gap-4'>
               <button className='inline-block  '>{job.location}</button>
               <button className='inline-block '>{job.role}</button>
            </div>
         </div>
         <div className='hidden md:flex gap-2 '>
            <Link to={'/applyJob'} className='duration-300 border-2 text-white border-indigo-500 py-1 px-2 md:py-2 md:px-4 rounded-xl font-semibold hover:text-indigo-500 hover:bg-white bg-indigo-500'>Browse Jobs</Link>
            <button  className='text-3xl cursor-pointer text-indigo-500' onClick={()=>handleLikedJobs()}>{likedJobs.includes(job.id)?<FaHeart />:<CiHeart />}</button>
         </div>
      </div>
   )
}

export default JobCard
