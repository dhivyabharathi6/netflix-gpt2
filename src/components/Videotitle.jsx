import React from 'react'

const Videotitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video pt-70 text-white bg-gradient-to-r from-black px-12 absolute'>
       <h2 className='text-4xl font-bold '>{title}</h2>
       <p className='text-md py-6 w-1/3 '>{description}</p>
       <div className='py-3'>
           <button className='bg-white text-black px-7 py-2 rounded-md  '>▶ Play</button>
           <button className='bg-gray-500/50  px-7 py-2 rounded-md mx-3 '>ⓘ More Info</button>
       </div>
       
    </div>
  )
}

export default Videotitle
