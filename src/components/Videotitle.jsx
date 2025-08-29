import React from 'react'

const Videotitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-40 md:pt-70 text-white bg-gradient-to-r from-black px-12 absolute'>
       <h2 className='md:text-4xl w-1/2 md:1/3 text-lg font-bold '>{title}</h2>
       <p className='text-md py-6 w-1/3 hidden md:inline-block '>{description}</p>
       <div className='py-3'>
           <button className='bg-white text-black p-2 text-sm md:px-7 md:py-2 rounded-md  '>▶ Play</button>
           <button className='bg-gray-500/50  p-2 text-sm md:px-7 md:py-2 rounded-md mx-3 '>ⓘ More Info</button>
       </div>
       
    </div>
  )
}

export default Videotitle
