import React from 'react'
import { IMG_CDN } from '../utils/constants'

const Moviecard = ({poster}) => {
  if(!poster) return null
  return (
    <div className='w-44 pr-3'>
      <img alt='poster'
      src={IMG_CDN+poster}
      
      />
    </div>
  )
}

export default Moviecard
