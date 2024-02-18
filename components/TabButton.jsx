import React from 'react'
import { motion } from 'framer-motion' 

const variants = {
  default: { width: 0},
  active: { width: "calc(100% - .75rem)"},
}


function TabButton({active, selectTab, children}) {
    const buttonClasses = active ? "text-purple-600" : "text-gray-400 "

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-purple-600 ${buttonClasses}`}> 
            {children}
        </p>
        <motion.div animate={ active ? "active" : "default" } variants={ variants } className='h-1 bg-purple-500 mt-2 mr-3'></motion.div>
    </button>

  )
}

export default TabButton