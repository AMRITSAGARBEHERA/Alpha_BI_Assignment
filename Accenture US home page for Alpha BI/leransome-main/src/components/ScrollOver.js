'use client'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ScrollOver = () => {
  const [scrollY, setScrollY] = useState(0);

  const ref= useRef();

  const handleScroll = () => {
    if (ref?.current?.scrollY < ref?.current?.innerHeight) {
      setScrollY(ref?.current?.scrollY);
    }
  };

  useEffect(() => {
    ref?.current?.addEventListener('scroll', handleScroll);
    return () => ref?.current?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" relative w-screen flex items-center justify-center " style={{y:scrollY}} ref={ref}>
     <motion.h1 className='text-[150px]  absolute top-[500px] -z-0 text-white  text-center capitalize font-semibold' style={{y:scrollY}} > 
     Global recognition and <br/> awards
     
     </motion.h1>
     <div className='w-full  h-[1500px] top-36 flex-col overflow-y-scroll gap-3 z-10 cardLayout'>

        <div className='h-[1500px]'></div>
       <div className='w-[800px] h-[500px] bg-purple-500 mt-20 ml-30 overflow-y-scroll cardLayout' >
       <motion.div className='w-full' whileHover={{y:-700, transition: { type: "spring", stiffness: 50 }}}>
                <div className='h-[300px]'></div>
                <h1 className="text-4xl font-bold text-center font-serif">
                We’re one of Fortune’s World’s Most Admired Companies
                </h1>

                <div className='h-[400px]'></div>
                <h2 className="text-2xl font-normal text-center font-serif px-10">
                consecutive year on the list and 10th consecutive year as No. 1 in IT ...
                </h2>
                <div className='h-[300px]'></div>
            </motion.div>


       </div>
       <div className='h-[200px]'></div>
       <div className='w-[800px] h-[500px] bg-red-500 mt-20 ml-[1700px] overflow-y-scroll cardLayout'>
            <motion.div className='w-full' whileHover={{y:-700, transition: { type: "spring", stiffness: 50 }}}>
                <div className='h-[300px]'></div>
                <h1 className="text-4xl font-bold text-center font-serif">
                We’re one of Fortune’s World’s Most Admired Companies
                </h1>

                <div className='h-[400px]'></div>
                <h2 className="text-2xl font-normal text-center font-serif px-10">
                consecutive year on the list and 10th consecutive year as No. 1 in IT ...
                </h2>
                <div className='h-[300px]'></div>
            </motion.div>
       </div>
       <div className='h-[500px]'></div>
       <div className='w-[800px] h-[500px] bg-orange-500 mt-20 ml-[800px] overflow-y-scroll cardLayout'>
            <motion.div className='w-full' whileHover={{y:-700, transition: { type: "spring", stiffness: 50 }}}>
                <div className='h-[300px]'></div>
                <h1 className="text-4xl font-bold text-center font-serif">
                We’re one of Fortune’s World’s Most Admired Companies
                </h1>

                <div className='h-[400px]'></div>
                <h2 className="text-2xl font-normal text-center font-serif px-10">
                consecutive year on the list and 10th consecutive year as No. 1 in IT ...
                </h2>
                <div className='h-[300px]'></div>
            </motion.div>
       </div>
       <div className='h-[800px]'></div>
     </div>
    </div>
  );
};

export default ScrollOver;
