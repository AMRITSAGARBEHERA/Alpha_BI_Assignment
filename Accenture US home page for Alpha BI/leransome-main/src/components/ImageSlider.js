import Image from 'next/image'
import React from 'react'
import sample from "../../sample.jpg"
import { motion } from 'framer-motion'
import { FaAngleRight } from 'react-icons/fa'
// import { Sanchez } from 'next/font/google'

const ImageSlider = ({img,Heading,desc}) => {
    return (
      <motion.div className="w-screen h-[1000px]  mt-20 mb-20 flex items-center justify-around"
      
      >
          
            <Image src={img || sample}  className='h-4/5 w-2/6 object-cover' />

            <div className='h-full flex w-3/6 items-end justify-end py-6 '>
                    <div className='flex items-end justify-end flex-col gap-10'>
                        <h1 className="text-white text-8xl font-bold text-left">{Heading || "heading"}</h1>
                      
                        <p className="text-white text-4xl font-bold text-right">{desc || "usmod tempor incididunt ."}</p>

                        <div className='flex items-center justify-center gap-6'>
                            <h1 className='text-white text-2xl '>Read More</h1>
                            <div className='w-8 h-8 flex items-center justify-center bg-purple-700 cursor-pointer'>
                <FaAngleRight color='white' size={30}/>
            </div>

                        </div>

                    </div>


            </div>

     
    </motion.div>
    )
  }
export default ImageSlider
