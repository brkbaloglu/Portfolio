"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/BRK.png'
import Link from 'next/link'
import { TfiMenu } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";


function Header() {


  const [nav, setNav] = useState(false)

  const handleNavbar = () => {
    setNav(!nav)
  }



  return (
    <div className='sticky top-0 bg-white z-10 h-[80px] shadow-2xl'>
      <div className='flex items-center justify-between px-20 h-[90px] bg-white '>
        <div> 
          <Image className={nav ? "hidden" : ""} src={logo} width={80} height={80} alt='logo'></Image>
        </div>
        <div className={nav ? "hidden" : "hidden lg:flex items-center justify-between"}>
          <Link href="/#home" className='mx-2 text-lg text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Home</Link>
          <Link href="/#about" className='mx-2 text-lg text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>About</Link>
          <Link href="/#projects" className='mx-2 text-lg text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Projects</Link>
          <Link href="/#contact" className='mx-2 text-lg text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Contact</Link>
        
        </div>
        <div className={nav ? "" : 'lg:hidden block'}>
          <TfiMenu onClick={handleNavbar} size={25} className='text-purple-600'/>
        </div>
      </div>
      <div className={nav ? "relative" : "flex items-center justify-between mx-20 h-[100px]"}>
        <div className={nav ? "absolute flex items-center justify-start pt-20 flex-col w-[50%] xl:w-[40%] h-screen bg-white z-10" : "hidden"}> 
          
          <div className=''>
            <Image className="mb-5 lg:w-[150px] lg:h-[150px]" src={logo} width={100} height={100} alt='logo'></Image>
          </div>
          <IoMdClose onClick={handleNavbar} className="absolute top-2 right-2 p-2 rounded-xl  text-purple-600 hover:rotate-90 duration-300 cursor-pointer"  size={40} />

          <div className='flex items-center justify-center flex-col'>
            <Link href="/#home" className=' text-2xl text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Home</Link>
            <Link href="/#about" className=' text-2xl text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>About</Link>
            <Link href="/#projects" className=' text-2xl text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Projects</Link>
            <Link href="/#contact" className=' text-2xl text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded-xl'>Contact</Link>
          
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header