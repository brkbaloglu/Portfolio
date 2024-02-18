"use client"
import React, { useState, useTransition } from 'react'
import TabButton from '@/components/TabButton'
import { GiGraduateCap } from "react-icons/gi";
import { BsDashLg } from "react-icons/bs";

const TAB_DATA = [
  {
      title: "Skills",
      id: "skills",
      content: (
          <ul className='grid grid-cols-2 md:grid-cols-4 '>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> HTML</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> CSS</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> JavaScript</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> PHP</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> MySQL</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> SASS/SCSS</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> Git</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> Python</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> React.js</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> Tailwind</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> Node.js</li>
              <li className='flex items-center'><BsDashLg size={25} className='mr-2' /> Next.js</li>
          </ul>
      )
  },{
      title: "Education",
      id: "education",
      content: (
          <ul className=''>
              <li className='flex items-center my-2 md:my-0 text-sm md:text-lg'><GiGraduateCap size={25} className='mr-2'/> Bozuyuk Kumral Abdal Anatolian High School</li>
              <li className='flex items-center my-2 md:my-0 text-sm md:text-lg'><GiGraduateCap size={25} className='mr-2'/> Eskisehir Osmangazi University | Math and Computer Science</li>
          </ul>
      )
  }
]

function About() {

  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <div id='about' className='my-10 mx-10'>
      <div className='text-center mx-10 '>
        <h5 className='font-bold text-xs text-gray-500 uppercase'>About Me</h5>
        <h2 className='font-bold text-4xl'>Who  <span className='text-purple-600'>Am I</span>?</h2>
      </div>
      <div className='mt-10 mx-10'>
        <p>I was born in Bozuyuk, Bilecik, Turkey at 2001. I started studying at Eskisehir
            Osmangazi University, Math and Computer Science at 2019 and since then, I've been interested in math and web
            programming. I am a responsible, hardworking person who
            likes to learn new things and tries to improve myself. Now, I'm 4th year Math and Computer Science student
            at Eskisehir Osmangazi University and making a preparation for math postgraduate.</p>
      </div>
      <div className="flex flex-row mt-8 justify-center mx-10">
        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
      </div>
      <div className='mt-8 mx-10'>
        {
          TAB_DATA.find((t) => t.id === tab).content
        }
      </div>
    </div>
  )
}

export default About