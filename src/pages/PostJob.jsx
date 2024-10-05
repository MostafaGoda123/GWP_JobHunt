import React, { useState } from 'react'
import Title from '../components/Title'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'

const PostJob = () => {

   const [submitted, setSubmitted] = useState(false)
   let navigate = useNavigate()
   let formik = useFormik({
      initialValues : {
         company: '',
         location: '',
         position: '',
         role: '',
         experience: '',
         salary: ''
      },validate:handleValidate
      ,onSubmit:handleSubmit
   })
   function handleValidate(values) {
      let errors = {}
         if (!values.company) errors.title = 'company is required'
         else if (!values.location) errors.title = 'location is required'
         else if (!values.position) errors.title = 'position is required'
         else if (!values.role) errors.title = 'role is required'
         else if (!values.experience) errors.title = 'experience is required'
         else if (!values.salary) errors.title = 'salary is required'
      return errors
   }
   function handleSubmit() {
      setSubmitted(true)
      setTimeout(() => {
         setSubmitted(false)
         navigate('/jobs')
      }, 3000);   
   }

   return (
      <div>
         <Title name={'Post a Job'} />
         <div className="container py-10 flex flex-col gap-5 items-center">
            <h1 className='text-4xl font-semibold'>Fill the form</h1>
            <form onSubmit={formik.handleSubmit} className='w-full md:w-[500px] bg-neutral-100 p-5 rounded-xl flex flex-col gap-8'>
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="company">Company Name : </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="company" id="company" placeholder='enter company name' className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' />
               </div>{/* company */}
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="location">Job Location : </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="location" id="location" placeholder='enter job location' className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' />
               </div>{/* location */}
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="logo">Company logo : </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="file" name="logo" id="logo" placeholder='enter company logo' className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' />
               </div>{/* logo */}
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="company">What position are you posting for?</label>
                  <select onBlur={formik.handleBlur} onChange={formik.handleChange} className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' name="position" id="position">
                     <option value="">Select Position</option>
                     <option value="Frontend">Frontend</option>
                     <option value="Backend">Backend</option>
                     <option value="Devops">Devops</option>
                     <option value="Full Stack">Full Stack</option>
                     <option value="Digital Marketing">Digital Marketing</option>
                  </select>
               </div>{/* position */}
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="role">Enter Job Role : </label>
                  <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="role" id="role" placeholder='enter job role' className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' />
               </div>{/* role */}
               <div className="inp flex flex-col gap-0 text-xl">
                  <label htmlFor="experience" className='mb-2'>Experience : </label>
                  <select onBlur={formik.handleBlur} onChange={formik.handleChange} className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' name="experience" id="experience">
                     <option value="">Select Experience</option>
                     <option value={0}>0-1 year</option>
                     <option value={1}>1-2 year</option>
                     <option value={2}>2-3 year</option>
                     <option value={3}>3-4 year</option>
                     <option value={4}>4-5 year</option>
                     <option value={5}>5+ year</option>
                  </select>
               </div>{/* experience */}
               <div className="inp flex flex-col gap-2 text-xl">
                  <label htmlFor="salary">Salary : </label>
                  <select onBlur={formik.handleBlur} onChange={formik.handleChange} className='p-2 border-0 outline-0 bg-neutral-200 rounded-md' name="salary" id="salary">
                     <option value="">Select Salary</option>
                     <option value="0k-15K">0k-15K</option>
                     <option value="15K-30k">15K-30k</option>
                     <option value="30K-50k">30K-50k</option>
                     <option value="50k-80k">50k-80k</option>
                     <option value="80K+">80K+</option>
                  </select>
               </div>{/* salary */}
               {formik.errors && <p className='text-red-600 text-xl'>{formik.errors.title}</p>}
               <button typeof='submit' className='duration-300 border-2 text-white border-indigo-500 py-1 px-2 md:py-2 md:px-4 rounded-xl font-semibold hover:text-indigo-500 hover:bg-white bg-indigo-500'>Submit</button>
            </form>
         </div>
         {submitted && 
            <div className='fixed top-10 left-1/2 -translate-x-1/2 p-10 rounded-xl bg-white shadow-lg text-3xl font-bold text-green-600'>
               Your Job is added
            </div>}
      </div>
   )
}

export default PostJob
