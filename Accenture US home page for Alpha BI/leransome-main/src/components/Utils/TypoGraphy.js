"use client"
import React, { useEffect, useRef, useState } from 'react'
import {motion, useAnimate} from 'framer-motion'
import { FaAngleRight } from 'react-icons/fa';

function TypoGraphy() {
    const [coords, setCoords] = useState({x: 0, y: 0});
    const divref = useRef();
    const [scope1,animateText1] = useAnimate();

    useEffect(() => {
      const handleDivMouseMove = event => {
        setCoords({
          x: event.clientX,
          y: event.clientY,
        });
      };
    //   const div = document.getElementById('headings');
      divref?.current?.addEventListener('mousemove', handleDivMouseMove);
      
  
      return () => {
        divref?.current?.removeEventListener(
          'mousemove',
          handleDivMouseMove,
        );
      };
    }, []);


    return (
        <div className='flex flex-col items-center justify-center gap-2S headings mt-5' id='headings' ref={divref}>
         
           <motion.h1  ref={scope1} className='text-[150px]  text-white font-semibold '  
           animate={{x:(800-coords.x)/6}}
           onMouseLeave={()=>{

                animateText1(scope1.current,{x:0})

           }}
           
           >REINVENT WHAT YOUR</motion.h1>
           <motion.h1
        
           animate={{x:-(800-coords.x)/6}}
           className='text-[150px]  leading-9 text-white font-semibold '>BUISNESS COULD BE</motion.h1>

           <div className='text-white text-5xl font-semibold mt-36 flex flex-row  items-center justify-center gap-4'>
            Let there be change
           
            <div className='w-8 h-8 flex items-center justify-center bg-purple-700 cursor-pointer'>
                <FaAngleRight color='white' size={30}/>
            </div>
           </div>
        </div>
    )
}

export default TypoGraphy
