import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({title, movies}) => {
  if(movies == null) return 
 
  return (
    <div className='pl-10'>
       <h1 className='py-4 text-2xl text-white'>{title}</h1>
         <div className='flex overflow-scroll '>
         <div className='flex'>
          {movies && movies.map(movie => 
            <Moviecard  key={movie.id} poster={movie?.poster_path}/>
          )}
          
         </div>
          </div>
    </div>
  )
}

export default Movielist
