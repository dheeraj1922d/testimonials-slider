import React from 'react'
import Testimonials from './components/Testimonials'
import  reviews  from './data'

const page = () => {
  
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] justify-center items-center bg-gray-200">
      <div className="text-center">
      <h1 className="text-4xl font-bold ">OUR TESTIMONIALS</h1>
      <div className="bg-violet-400 h-[4px] w-[1/5] mt-1"></div>
      <Testimonials reviews={reviews}/>
      </div>
      
    </div>
  )
}

export default page