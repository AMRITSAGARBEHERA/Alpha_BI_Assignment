'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import sample from "../../sample.jpg"
const RadCard = ({img,title,desc,year}) => {
  return (
   <div>
     <motion.div
      className="relative h-[800px]  w-[70rem] bg-hero-pattern object-cover"

        initial={{width:'30rem'}}
        whileTap={{width:'70rem'}}
        whileHover={{width:'70rem' }}
     
     
      transition={{ duration: 0.55, ease: [0.85, 0, 0, 1] }}
    >
        <div className='absolute z-10 w-full overflow-hidden'>
            <h1 className='text-3xl pl-3 pt-5  text-white capitalize'>{title || "Research Report"}</h1>
            <h2 className='text-4xl pl-3 pt-5 font-semibold text-white capitalize '>{desc||"accenture life trends"}</h2>
            <h3 className='text-5xl pt-2  pl-3 font-semibold capitalize text-white'>{year || 2023}</h3>





        </div>
        
       <motion.div className='absolute -z-0 w-full h-full'
       whileHover={{ filter: 'blur(5px)' }}
       
       >
       <Image src={img || sample} className='h-full w-full object-cover'/>
       </motion.div>
       
          
    </motion.div>
   </div>
  );
};

export default RadCard;

