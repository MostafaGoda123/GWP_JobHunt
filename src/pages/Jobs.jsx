import React, { useContext } from 'react'
import Title from '../components/Title'
import JobCard from '../components/JobCard'
import { JobContext } from '../context.jsx/jobContext'


const Jobs = () => {

   let { jobs,allCategories,allExperiences,activeCategory,activeExperience,handleCategories,handleExperiences  } = useContext(JobContext);

   return (
      <main>
         <Title name={'Our Jobs'} />
         <div className="bg-neutral-100 py-10">
            <div className="container flex gap-10 flex-col-reverse md:flex-row">
               <section className='flex-1 flex flex-col gap-5'>
                  {jobs.map((job) => <JobCard key={job.id} job={job} />)}
               </section>
               <section className='flex gap-5 flex-row md:flex-col '>
                  <ul className='flex flex-col gap-1 bg-white p-5 rounded-xl font-semibold items-center text-neutral-500 text-xl'>
                     <li className='mb-2 text-2xl text-black font-bold'>Categories</li>
                     {allCategories.map((category) => (
                        <li key={category} onClick={()=>handleCategories(category)} className={`text-center duration-300 hover:text-indigo-500 cursor-pointer ${category === activeCategory ? "text-indigo-500" : "" }`}>{category}</li>
                     ))}
                  </ul>
                  <ul className='flex flex-col gap-1 bg-white p-5 rounded-xl font-semibold items-center text-neutral-500 text-xl'> 
                     <li className='mb-2 text-2xl text-black font-bold'>Experience</li>
                     {allExperiences.map((exp) => (
                        <li key={exp} onClick={() => handleExperiences(exp)} className={`duration-300 hover:text-indigo-500 cursor-pointer ${exp === activeExperience ? "text-indigo-500" : "" }`}>{exp}</li>
                     ))}
                  </ul>
               </section>
            </div>   
         </div>
      </main>
   )
}

export default Jobs

