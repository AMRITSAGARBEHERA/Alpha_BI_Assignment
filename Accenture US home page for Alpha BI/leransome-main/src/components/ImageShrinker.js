import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'

const ImageShrinker = () => {
  return (
    <div className='w-screen flex flex-row items-center justify-between px-12'>
        <motion.div
        initial={{height:'700px',width:'200vw'}}
        whileInView={{left:0,height:'600px',width:'1300px'}}
        
        transition={{duration:2 , delay:.5,type:'tween'}}
        >
            <Image src={require("../../image/image4.jpg")} className='w-full h-full object-cover'/>

        </motion.div>

        <motion.div className='flex flex-col items-end gap-4 p-5 justify-around mt-52'
                initial={{opacity:0,y:400}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:.7 , delay:1,type:'tween'}}
        
        >
            <h1 className='text-white text-5xl my-2 text-right' >OUR CULTURE</h1>
            <p className='text-white text-3xl text-right'>We combine technology with human<br/> ingenuity to solve some <br/>of the world's biggest challenges.<br/> When you work with us,<br/> the possibilities are endless.</p>
            <div className='flex items-center justify-center gap-6'>
                            <h1 className='text-white text-2xl '>Join us</h1>
                            <div className='w-8 h-8 flex items-center justify-center bg-purple-700 cursor-pointer'>
                <FaAngleRight color='white' size={30}/>
            </div>
            </div>
        </motion.div>

    </div>
  )
}

export default ImageShrinker
