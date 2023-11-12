import React from 'react'
import Change from './Utils/Change'

const Footer = () => {
  return (
    <footer className="p-6 bg-black text-white w-screen h-[500px] bottom-0 flex items-center justify-around">
        <div className='w-1/2 h-full flex flex-col px-6'>
            <h1 className='text-6xl font-semibold px-6'>Let there be change</h1>
            <div className='grid grid-cols-2 w-4/6 gap-y-12 my-auto mt-[300px] mx-12'>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Preference Center</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Careers</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">About Us</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Contact Us</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Locations</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Sitemap</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Privacy Statement</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Terms & Conditions</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Cookie Policy/Settings</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Accessibility Statement</a>
                <a href="#" className="text-2xl text-white hover:text-gray-300 text-left">Do Not Sell/Share My Personal Information (for CA)</a>
            </div>

        </div>
        <div className='w-1/2 h-full flex items-end justify-end'>

            <Change/>
        </div>

</footer>
  )
}

export default Footer
