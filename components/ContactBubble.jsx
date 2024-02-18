import React from 'react'
import { BiSolidMessageRoundedDetail  } from "react-icons/bi";
import Link from 'next/link';

function contactBubble() {
  return (
    <Link href="/#contact" className='fixed bottom-5 right-5 border-4 border-purple-600 p-3 rounded-full bg-white hover:bg-purple-600 hover:border-white group animate-bounce'>
        <BiSolidMessageRoundedDetail  className='text-purple-600 group-hover:text-white' size={30}/>
    </Link>
  )
}

export default contactBubble