
import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'

const Secondcontainer = () => {
  const movies = useSelector(store=> store.movie)
  return (
    <div className='md:-mt-50  -mt-60 mr-6 relative z-50'>
       <Movielist title={"Now Playing"} movies={movies.nowPlaying}/>
       <Movielist title={"Popular"} movies={movies.popular}/>
       <Movielist title={"Top Rated"} movies={movies.toprated}/>
       <Movielist title={"UP Coming"} movies={movies.upcoming}/>
    </div>
  )
}

export default Secondcontainer
