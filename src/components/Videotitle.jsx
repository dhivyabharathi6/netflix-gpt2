import React from 'react'

const Videotitle = ({title, description}) => {
  return (
    <div className='py-38 mx-12'>
       <h2 className='text-2xl font-bold py-2'>{title}</h2>
       <p className='text-lg w-1/3 '>{description}</p>
       <div className='py-3'>
           <button className='bg-gray-500 px-12 py-2 rounded-md  '>Play</button>
           <button className='bg-gray-500 px-12 py-2 rounded-md mx-1'>More details</button>
       </div>
       
    </div>
  )
}

export default Videotitle
