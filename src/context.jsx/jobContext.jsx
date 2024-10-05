import { createContext, useState } from "react";
// import allJobs from '../Assets/jobs.json'
import { allJobs } from "../Assets/jobs";


export let JobContext = createContext()

export default function JobContextProvider({children}) {

   let allCategories = [ "All" , 'Frontend' , 'Backend' , 'Devops' , 'Full Stack' , 'Digital Marketing' ]
   let allExperiences = [ "All" , '0-1 year' , '2-3 year' , '4-5 year' , '5+ year' ]
   const [jobs, setJobs] = useState(allJobs)
   const [likedJobs, setLikedJobs] = useState([])
   const [activeCategory, setActiveCategory] = useState('All')
   const [activeExperience, setActiveExperience] = useState('All')
   function handleExperiences(exp) {
      setActiveExperience(exp)
      setActiveCategory('All')
      let experienceNumber = exp.slice(0,1)
      experienceNumber = Number(experienceNumber)
      let updatedJobs = allJobs.filter(job => {
         if (experienceNumber === 0)      return job.experience === 0 || job.experience === 1
         else if (experienceNumber === 2) return job.experience === 2 || job.experience === 3
         else if (experienceNumber === 4) return job.experience === 4
         else if (experienceNumber === 5) return job.experience >= 5
         else return job
      })
      setJobs(updatedJobs);
   }
   function handleCategories(category) {
      setActiveCategory(category)
      setActiveExperience('All')
      let updatedJobs = allJobs.filter(job => category==="All"?job:job.role === category)
      setJobs(updatedJobs);
   }


   return <JobContext.Provider value={{ jobs,allCategories,allExperiences,likedJobs,setLikedJobs,activeCategory,setActiveCategory,activeExperience,setActiveExperience,handleCategories,handleExperiences }}>
      {children}
   </JobContext.Provider>


}

