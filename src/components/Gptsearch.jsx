import React from 'react'
import { useSelector } from 'react-redux'
import GPTSbar from './GPTSbar'
import Gptmovies from './Gptmovies'
import { BG_URL } from '../utils/constants'

const Gptsearch = () => {

    
  return (
//     <div className="relative min-h-screen ">
//         <div className="absolute inset-0 -z-10">
//         <img
//          className="h-full w-full object-cover"

//           src={BG_URL}
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>
//       <div className=" relative z-10">
//         <GPTSbar/>
//         <Gptmovies/>
// </div>
//     </div>

        <div className="relative min-h-screen ">
          
        <div className="absolute  ">
        <img
          className="h-screen object-cover w-screen fixed"
          src={BG_URL}
        />
       
      </div >
       <div className="absolute  inset-0 bg-black/60"></div>
      <div className=" relative z-10  pt=[60px]"  >
          <GPTSbar/>
          <Gptmovies/>
      </div>
      

    </div>



  )
}

export default Gptsearch
