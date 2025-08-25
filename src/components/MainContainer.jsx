import React from 'react'
import Videobg from './Videobg'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    let movie = useSelector(store=> store.movie?.nowPlaying)
    if(movie== null) return;
   let mainmovie = movie[Math.floor(Math.random() * 16)]
   console.log(mainmovie)
   let {original_title,id ,overview} = mainmovie
  return (
    <div className="relative w-full h-screen">
      <Videobg movie_id={id}/>
      <Videotitle  title={original_title} description = {overview}/>
    </div>
  )
}

export default Maincontainer
