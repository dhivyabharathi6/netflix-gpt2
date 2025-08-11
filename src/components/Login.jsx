import React from 'react'
import Headers from './Headers'

const Login = () => {
  return (
    <div>
      <Headers/>
      <div className='absolute '> 
           <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"/>
             <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <form className='w-1/4 absolute bg-black/70 p-12 my-36 mx-auto right-0 left-0   text-white bg-opacity-70' >
       <h2 className='font-bold text-3xl py-4'>Sign In</h2>
        <input className="p-4 my-4  bg-gray-600 w-full text-sm rounded-sm" type='text' placeholder='Email Address' />
         <input className="p-4 my-4  bg-gray-600  w-full text-sm rounded-sm"type='password' placeholder='Password' />
         <button className='p-4 my-6  bg-red-700 bg-opacity-80  w-full text-sm rounded-sm' >Sign in</button>
      </form>
     
    </div>
  )
}

export default Login
