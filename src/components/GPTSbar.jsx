import React from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGES } from '../utils/constants'
import lang from '../utils/langConstant'

const GPTSbar = () => {

     let langkey = useSelector(store=> store.config.language)
     console.log(langkey);
     
  return (
    <div className='pt-[15%] gridgrid-cols-12 flex justify-center '>
       <form className=' bg-black grid grid-cols-12 w-1/2 z-10' >
          <input type="text"  className='bg-white p-3 m-4 col-span-9 rounded-md' placeholder={lang[langkey]?.gptplaceholder}/>
          <button className="py-2 px-5 col-span-3 m-4 bg-red-700 text-white rounded-md">{lang[langkey]?.search}</button>
       </form>
    </div>
  )
}

export default GPTSbar
