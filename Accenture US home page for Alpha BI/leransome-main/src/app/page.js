'use client'
import RadCard from '@/components/Card'
import RadCardLayOut from '@/components/Layout/RadCardLayOut'
import Navbar from '@/components/Navbar'
import TypoGraphy from '@/components/Utils/TypoGraphy'
import Image from 'next/image'
import {motion} from 'framer-motion'
import ValueTypo from '@/components/Utils/ValueTypo'
import ImageSlider from '@/components/ImageSlider'
import ImageSliderLayout from '@/components/Layout/ImageSliderLayout'
import ScrollOver from '@/components/ScrollOver'
import ImageShrinker from '@/components/ImageShrinker'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="h-auto">
        <Navbar/>
        <div className='h-36'></div>
        <TypoGraphy/>
        <RadCardLayOut/>
        <div className='h-6'></div>
     

        <RadCardLayOut reverse={true} />
        <div className='h-6'></div>
        <ValueTypo/>
        <div className='h-6'></div>
        <ImageSliderLayout/>
        <div className='h-6'></div>
        <ScrollOver/>
        <div className='h-96'></div>
        <ImageShrinker/>
          <div className='h-96'></div>
          <Footer/>

    </main>
  )
}
