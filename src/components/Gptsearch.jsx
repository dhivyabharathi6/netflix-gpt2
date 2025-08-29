import React from 'react'
import { useSelector } from 'react-redux'
import GPTSbar from './GPTSbar'
import Gptmovies from './Gptmovies'
import { BG_URL } from '../utils/constants'

const Gptsearch = () => {

    
  return (
    <div className='bg-white '>
        <div className="absolute  ">
        <img
          className="h-screen object-cover"
          src={BG_URL}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
        <GPTSbar/>
        <Gptmovies/>

    </div>
  )
}

export default Gptsearch
