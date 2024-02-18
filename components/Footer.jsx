import React from 'react'
import Image from 'next/image'
import logo from '../public/BRK.png'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

function Footer() {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 mx-5 my-10'>
        <div className='flex items-center justify-self-center'>
          <Image src={logo} width={180} height={180} alt='footer-logo'></Image>
        </div>
        <div className='py-10 md:border-x-2 border-purple-600 flex items-center justify-center'>
          <Link href="https://github.com/brkbaloglu"><FaGithub size={50} className='p-2 text-purple-600 hover:text-white hover:bg-purple-600 rounded-xl'/></Link>
          <Link href="https://www.linkedin.com/in/mehmet-burak-baloglu/"><FaLinkedin size={50} className='p-2 text-purple-600 hover:text-white hover:bg-purple-600 rounded-xl'/></Link>
          <Link href="mailto:burak_baloglu_148@gmail.com"><FaEnvelope size={50} className='p-2 text-purple-600 hover:text-white hover:bg-purple-600 rounded-xl'/></Link>
        </div>
        <div className='flex justify-self-center flex-col my-10'>
          
          <Link className='flex items-center text-purple-600 hover:translate-x-4 my-1 duration-300' href="/#home"><FaArrowRight className='mx-2 '/>Home</Link>
          <Link className='flex items-center text-purple-600 hover:translate-x-4 my-1 duration-300' href="/#about"><FaArrowRight className='mx-2 group-hover:translate-x-4 duration-300'/>About</Link>
          <Link className='flex items-center text-purple-600 hover:translate-x-4 my-1 duration-300' href="/#projects"><FaArrowRight className='mx-2 '/>Projects</Link>
          <Link className='flex items-center text-purple-600 hover:translate-x-4 my-1 duration-300' href="/#contact"><FaArrowRight className='mx-2 '/>Contact</Link>
          
        </div>
      </div>
      <div>
        <p className='px-20 my-4 py-2 flex items-center justify-start text-xs sm:text-lg  text-white bg-purple-600'><AiOutlineCopyrightCircle size={25} className='mr-2'/> <span>Copyright 2023 | All rights reserved.</span></p>
      </div>
    </div>
  )
}

export default Footer