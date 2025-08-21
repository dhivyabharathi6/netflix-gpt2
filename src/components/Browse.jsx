import React, { useEffect } from 'react'
import Headers from './Headers'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlaying } from '../utils/movieSlics'
import Maincontainer from './Maincontainer'
import Secondcontainer from './Secondcontainer'



const Browse = () => {
  let dispatch = useDispatch()
    const getNowplayMov = async()=>{
    let movies = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
  
    let json = await movies.json()
     console.log(json)
    dispatch(addNowPlaying(json.results))
    }

  useEffect(()=>{
    getNowplayMov()
  },[])

  
  return (
    <div>
         <Headers/>
         <Maincontainer/>
         <Secondcontainer/>
    </div>
  )
}

export default Browse
