import React, { useContext } from 'react'
import Title from '../components/Title'
import { JobContext } from '../context.jsx/jobContext'
import JobCard from '../components/JobCard'

const SavedJob = () => {

   let { likedJobs , jobs } = useContext(JobContext)
   let likedJobsItems = jobs.filter((job) => likedJobs.includes(job.id))

   return (
      <div>
         <Title name={'Saved Job'} />
         <section className='bg-neutral-100 py-10'>
            <div className="container flex flex-col gap-5">
               {likedJobs.length === 0 ? 
               <p className='text-center text-xl sm:text-3xl font-semibold'>There isn't any Saved Jobs</p>
               :
               likedJobsItems.map((job) => <JobCard key={job.id} job={job} />)}
            </div>
         </section>
      </div>
   )
}

export default SavedJob
