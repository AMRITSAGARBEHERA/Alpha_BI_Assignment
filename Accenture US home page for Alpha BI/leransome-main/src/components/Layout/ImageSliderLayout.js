'use client'
import React, { useState } from 'react'
import ImageSlider from '../ImageSlider';
import {motion, useAnimate} from 'framer-motion'
import { FaAlignLeft, FaAlignRight, FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ImageSliderLayout = () => {


    const [scope,animate] =useAnimate()


    const dataArray = [
        {
          img: require("../../../image/image1.jpg"),
          title: "Title 1",
          desc: "Description 1",
          year: 2023
        },
        {
          img: require("../../../image/image2.jpg"),
          title: "Title 2",
          desc: "Description 2",
          year: 2022
        },
        {
          img: require("../../../image/image3.jpg"),
          title: "Title 3",
          desc: "Description 3",
          year: 2021
        },
        {
          img: require("../../../image/image4.jpg"),
          title: "Title 4",
          desc: "Description 4",
          year: 2020
        },
        {
          img: require("../../../image/image5.jpg"),
          title: "Title 5",
          desc: "Description 5",
          year: 2019
        },
        {
          img: require("../../../image/image6.jpg"),
          title: "Title 6",
          desc: "Description 6",
          year: 2018
        },
        {
          img: require("../../../image/image7.jpg"),
          title: "Title 7",
          desc: "Description 7",
          year: 2017
        },
        {
          img: require("../../../image/image8.jpg"),
          title: "Title 8",
          desc: "Description 8",
          year: 2016
        },
        {
          img: require("../../../image/image9.jpg"),
          title: "Title 9",
          desc: "Description 9",
          year: 2015
        },
        {
          img: require("../../../image/image10.jpg"),
          title: "Title 10",
          desc: "Description 10",
          year: 2014
        }
      ];

      const [idx,setIdx] =useState(0);

      const decreasingIdx =()=>{
            animate(scope.current,{x:200})
            setTimeout(()=>{
                animate(scope.current,{x:0,transition:{ease:'easeIn',type:'tween'}})

            },100)
            idx>0?setIdx(idx-1):setIdx(9)

      }
      const increasingIdx =()=>{
        animate(scope.current,{x:-200})
        setTimeout(()=>{
            animate(scope.current,{x:0,transition:{ease:'easeIn',type:'tween'}})

        },200)
        idx<9?setIdx(idx+1):setIdx(0);
      }

  return (
    <div>
         <div
       // Animation duration
       ref={scope}
      >
        <ImageSlider img={dataArray[idx].img} Heading={dataArray[idx].title} desc={dataArray[idx].desc} />
      </div>
      <div className='w-screen h-20 flex items-start justify-start gap-14 px-11 '>
        <FaArrowAltCircleLeft size={40} color='white' onClick={decreasingIdx}/>
        <FaArrowAltCircleRight size={40} color='white' onClick={increasingIdx}/>
      </div>
    </div>
  )
}

export default ImageSliderLayout
