import { useDispatch } from "react-redux"
import {  addUpcoming } from "../utils/movieSlics"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"


let useUpcoming = ()=>{
    let dispatch = useDispatch()
    const getUpcoming = async()=>{
    let movies = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS)
    let json = await movies.json()  
    dispatch(addUpcoming(json.results))
    }

  useEffect(()=>{
    getUpcoming()
  },[])
}

export default useUpcoming 