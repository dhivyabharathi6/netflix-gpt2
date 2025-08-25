import { useDispatch } from "react-redux"
import { addNowPlaying } from "../utils/movieSlics"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"


let useNowplaying = ()=>{
    let dispatch = useDispatch()
    const getNowplayMov = async()=>{
    let movies = await fetch("https://api.themoviedb.org/3/movie/now_playing?&page=1",API_OPTIONS)
    let json = await movies.json()  
    dispatch(addNowPlaying(json.results))
    }

  useEffect(()=>{
    getNowplayMov()
  },[])
}

export default useNowplaying