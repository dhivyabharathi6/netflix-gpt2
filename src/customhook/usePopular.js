import { useDispatch } from "react-redux"
import { addNowPlaying, addPopular } from "../utils/movieSlics"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"


let usePopular = ()=>{
    let dispatch = useDispatch()
    const getPopular = async()=>{
    let movies = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS)
    let json = await movies.json()  
    dispatch(addPopular(json.results))
    }

  useEffect(()=>{
    getPopular()
  },[])
}

export default usePopular