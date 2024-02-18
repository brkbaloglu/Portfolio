import React from 'react'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

function Project({ title, technologies, image, description, githubLink }) {
  return (
    <div className='m-2 border-2 border-purple-600 rounded-xl p-5 relative '>
      <div className='hover:bg-black/40 absolute top-0 left-0 bottom-0 right-0 group rounded-xl'>
        <div className='flex items-center justify-center h-full'>
          <Link href={githubLink}><FaGithub size={50} className='hidden group-hover:block text-purple-600 bg-white rounded-full' /></Link>
        </div>
      </div>
      <Image className='mx-auto' src={image} width={500} height={300} alt={`${title}-image`}></Image>
      <h2 className='mt-8 mb-6 text-xl md:text-3xl font-bold text-purple-600 '>{title}</h2>
      <h5 className='my-6 text-sm md:text-md'>{description}</h5>
      <p className='text-gray-600 text-xs md:text-sm absolute right-3 bottom-3 '>{technologies}</p>
    </div>
  )
}

export default Project