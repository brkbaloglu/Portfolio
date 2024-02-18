import React from 'react'
import cryptoWebsiteImage from '../../public/crypto.png'
import coffeeShopWebsiteImage from '../../public/coffee.png'
import restaurantWebsiteImage from '../../public/restaurant.png'
import countryListAppImage from '../../public/countrylist.png'
import Project from '@/components/Project'

const projects= [{
  title: "Cryptocurrency Website",
  technologies: "Next.js, Tailwind",
  description: "This is a cryptocurrency website developed with Next.js and TailwindCSS. In this project, I use CoinGecko API for informations of cryptocurrencies",
  image: cryptoWebsiteImage,
  githubLink: "https://github.com/brkbaloglu/CryptocurrencyWebsite-Nextjs"
},{
  title: "Coffee Shop Website",
  technologies: "React.js, Node.js, MySQL, Tailwind",
  description: "This is a coffee shop website developed with React.js, Node.js, MySQL and TailwindCSS.",
  image: coffeeShopWebsiteImage,
  githubLink: "https://github.com/brkbaloglu/Coffee_Shop_AdminPanel"
},{
  title: "Restaurant Website",
  technologies: "HTML, CSS, JavaScript, PHP, MySQL",
  description: "This is a restaurant website developed with HTML, CSS, JavaScript, PHP and MySQL.",
  image: restaurantWebsiteImage,
  githubLink: "https://github.com/brkbaloglu/RestaurantWebsite-v2"
},{
  title: "Country App",
  technologies: "React.js, Tailwind",
  description: "This is a country app developed with React.js and TailwindCSS. In this project, I use RESTful API for informations of countries",
  image: countryListAppImage,
  githubLink: "https://github.com/brkbaloglu/CountryList"
},]


function Projects() {
  return (
    <div id='projects' className='m-10'>
      <div className='mx-10 text-center'>
        <h5 className='font-bold text-xs text-gray-500 uppercase'>Portfolio</h5>
        <h2 className='font-bold text-4xl'>My <span className='text-purple-600'>Projects</span></h2>
      </div>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-2 md:m-10'>
          {
            projects.map((project, index) => (
              <Project key={index} githubLink={project.githubLink} title={project.title} image={project.image} technologies={project.technologies} description={project.description} className=""/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects