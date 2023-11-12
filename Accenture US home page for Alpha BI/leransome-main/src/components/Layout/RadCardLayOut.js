'use client'
import React from 'react'
import RadCard from '../Card'
import {motion} from 'framer-motion'




const RadCardLayOut = ({reverse}) => {



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



  return (
    <motion.div className='overflow-x-scroll flex items-center justify-center gap-44 h-[950px] cardLayout'>
        {
           reverse && dataArray.reverse().map((ele,idx)=><RadCard key={idx} desc={ele.desc} img={ele.img} title={ele.title} year={ele.year}/>)
        }
        {
            !reverse && dataArray.map((ele,idx)=><RadCard key={idx} desc={ele.desc} img={ele.img} title={ele.title} year={ele.year}/>)
        }
      
    </motion.div>
  )
}

export default RadCardLayOut
