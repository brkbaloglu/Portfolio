"use client"
import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';

function HomePage() {
  return (
    <div id='home' className='h-[calc(100vh-6rem)] bg-gradient-to-br from-purple-600/80 via-purple-300/80 to-pink-400/80 '>
      <div className='flex items-center justify-center flex-col pt-40 relative '>
        <h5 className='text-lg md:text-xl font-semibold text-white'>Let's work together!</h5>
        <h2 className='text-3xl md:text-5xl font-bold my-4 text-white'>Hi, I'm <span className='text-purple-600'>Burak Baloglu</span></h2>
        <h3 className='text-xl md:text-3xl font-bold my-2 text-white'>
          A {""}
          <span className='text-purple-600'>
            <TypeAnimation sequence={[
              "Mathematician",
              1000,
              "Front-End Developer",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            />
          </span>
        </h3>
        <Link href="/#projects" className='group flex items-center justify-center mt-2 px-4 py-2 border-[2.5px]  border-white rounded-xl text-white hover:text-purple-600 hover:bg-white text-xl'>My Portfolio <IoIosArrowForward className='group-hover:rotate-90 duration-300 ml-2'/></Link>
      </div>
      <div className=''></div>
    </div>
  )
}

export default HomePage