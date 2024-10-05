import React from 'react'

const Title = ({name}) => {
   return (
      <h1 className='mainTitle w-full h-64 bg-indigo-500 text-white flex items-center justify-center text-6xl font-bold'>{name}</h1>
   )
}

export default Title
