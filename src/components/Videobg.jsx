import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const Videobg = ({movie_id}) => {

    let getvideos = async()=>{
        let videos = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos",API_OPTIONS)
        let mvideos = await videos.json()
        console.log(mvideos)
        let {key} =mvideos
    }

    useEffect(()=>{
        getvideos() 
    },[])
  return (
    <div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/d9erkpdh5o0?si=oeZmj3UpJpfGOWbI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Videobg
