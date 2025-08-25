import React, { useEffect } from 'react'
import Headers from './Headers'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlaying } from '../utils/movieSlics'
import Maincontainer from './Maincontainer'
import Secondcontainer from './Secondcontainer'
import useNowplaying from '../customhook/useNowplaying'
import Videotitle from './Videotitle'
import usePopular from '../customhook/usePopular'
import useToprated from '../customhook/useToprated'
import useUpcoming from '../customhook/useUpcoming'



const Browse = () => {
  
useNowplaying()
usePopular()
useToprated()
useUpcoming()
  
  return (
    <div >
         <Headers/>
         <Maincontainer/>
         <Secondcontainer/>
    </div>
  )
}

export default Browse
