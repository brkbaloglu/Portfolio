import React from 'react'

function Contact() {
  return (
    <div id='contact' className='mx-10 my-10'>
      <div className='mx-10 mb-10 text-center'>
        <h5 className='font-bold text-xs text-gray-500 uppercase'>Let's work together</h5>
        <h2 className='font-bold text-4xl'>Contact <span className='text-purple-600'>Me</span></h2>
      </div>
      <form action="https://getform.io/f/ab5d0f54-d35d-41ea-b82d-314bddf6991d" method='POST' className='flex items-center justify-center flex-col'>
        <div className='flex items-center justify-center flex-col md:flex-row'>
          <input className='border-2 border-purple-600 p-2 placeholder:text-purple-600 w-[300px] mx-1 my-1 focus:outline-purple-950 focus:placeholder:text-purple-950' type="text" name="name" id="name" placeholder='Enter your name' />
        <input className='border-2 border-purple-600 p-2 placeholder:text-purple-600 w-[300px] mx-1 my-1 focus:outline-purple-950 focus:placeholder:text-purple-950' type="number" name='number' id='number' placeholder='Enter your number' />
        </div>
        <input className='border-2 border-purple-600 p-2 placeholder:text-purple-600 w-[300px]  md:w-[608px] mx-1 my-1 focus:outline-purple-950 focus:placeholder:text-purple-950' type="email" name='email' id='email' placeholder='Enter your e-mail' />
        <textarea className='border-2 border-purple-600 p-2 placeholder:text-purple-600 w-[300px] md:w-[608px] my-1 resize-none focus:outline-purple-950 focus:placeholder:text-purple-950' name="message" id="message" placeholder='Enter your message' cols="30" rows="10"></textarea>
        <button type="submit" className='px-4 py-2 rounded-lg border-2 border-purple-600 text-purple-600 my-10 hover:bg-purple-600 hover:text-white'>Submit</button>
      </form>
    </div>
  )
}

export default Contact