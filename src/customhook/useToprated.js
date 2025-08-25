import { useDispatch } from "react-redux"
import { addNowPlaying, addToprated } from "../utils/movieSlics"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"


let useToprated = ()=>{
    let dispatch = useDispatch()
    const getToprated = async()=>{
    let movies = await fetch("https://api.themoviedb.org/3/movie/top_rated",API_OPTIONS)
    let json = await movies.json()  
    dispatch(addToprated(json.results))
    }

  useEffect(()=>{
    getToprated()
  },[])
}

export default useToprated 