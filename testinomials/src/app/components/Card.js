import React from 'react'
import {FaQuoteLeft ,FaQuoteRight,} from "react-icons/fa";


const Card = (props) => {
    let review=props.review;
  

  return (
    <div className="flex flex-col md:relative">
        <div className="absolute top-[-7rem] z-[10] mx-auto">
            <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]" 
            src={review.image}></img>
            <div className="absolute  w-[140px] h-[140px] rounded-full bg-violet-500 top-[-6px] z-[-10] left-[10px]"></div>
        </div>

        <div className="w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-6px] z-[-20] left-[10px]"></div>

        <div className="text-center mt-7">
            
            <p className="font-bold text-2xl capitalize">{review.name}</p></div>

        <div className="text-center mt-7">
            <p className="text-violet-400 uppercase text-sm">{review.job}</p></div>

        <div className="text-violet-400 text-center mx-auto mt-5">
        <FaQuoteLeft/>
        </div>

        <div className="textcenter mt-4 mx-7 text-slate-500">
            <p>{review.text}</p>
        </div>

        <div className="text-violet-400 text-center mx-auto mt-5">
            <FaQuoteRight/>
        </div>


       


    </div>
  )
}

export default Card