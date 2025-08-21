import React from 'react'
import Videobg from './Videobg'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    let movie = useSelector(store=> store.movie?.nowPlaying)
    if(movie== null) return;
   let mainmovie = movie[0]
   console.log(mainmovie)
   let {original_title,id ,overview} = mainmovie
  return (
    <div>
      <Videobg movie_id={id}/>
      <Videotitle  title={original_title} description = {overview}/>
    </div>
  )
}

export default Maincontainer
