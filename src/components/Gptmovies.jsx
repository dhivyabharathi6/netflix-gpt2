import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Gptmovies = () => {

  let gpt = useSelector(store=> store.gpt)

  let{movieResults, movieNames}= gpt

  console.log(movieNames)
  return (
    <div className='w-[70%] mx-auto'>
 {movieNames && 
   <div className="m-4 p-4 bg-black/70 text-white ">
   {movieNames.map((movie,index)=> <Movielist key={movie} title={movie} movies={movieResults[index]} />)}
    </div>}
    </div>
  )
}

export default Gptmovies
