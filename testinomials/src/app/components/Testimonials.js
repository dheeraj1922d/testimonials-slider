"use client";

import React, { useState } from "react";
import Card from "./Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setindex] = useState(0);

  const leftHandler = () => {
    if (index - 1 < 0) {
      setindex(reviews.length - 1);
    } else {
      setindex(index - 1);
    }
  };

  const rightHandler = () => {
    setindex((index + 1) % reviews.length);
  };

  const supriseHandler = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setindex(randomIndex);
  };

  return (
    <div
      className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
     mt-10 pt-10 transition-all duration-700 hover: shadow-lg"
    >
      <Card review={reviews[index]} />

      <div className="flex text3xl mt-5 gap-3 text-violet-400 font-bold mx-auto mb-2">
        <button
          onClick={leftHandler}
          className="cursor-pointer hover:text-violet-500 ml-auto
            
            "
        >
          <FaAngleLeft />
        </button>

        <button
          onClick={rightHandler}
          className="cursor-pointer hover:text-violet-500 mr-auto
            
            "
        >
          <FaAngleRight />
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={supriseHandler}
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg 
            
            "
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
