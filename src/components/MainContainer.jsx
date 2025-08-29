import React, { useEffect, useState } from 'react'
import Videobg from './Videobg'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'

const Maincontainer = () => {
    let movies = useSelector(store=> store.movie?.nowPlaying) || []
    console.log(movies);
    
    const [mainmovie, setMainmovie] = useState(null);
    
    
       useEffect(() => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMainmovie(movies[randomIndex]);
    }
  }, [movies]); 

  if (!mainmovie) {
    return <p>Loading main movie…</p>;
  }

  

    // useEffect(()=>{
       
    //      
        
      
  
    // },[movie])
   
  return (
    <div className="relative w-full h-screen pt-[25%] md:pt-0">
      <Videobg movie={mainmovie}/>
      <Videotitle  title={mainmovie?.original_title} description = 
      {mainmovie?.overview.length > 200
    ? mainmovie.overview.substring(0, 200) + "..."
    : mainmovie?.overview}/>
    </div>
  )
}

export default Maincontainer
