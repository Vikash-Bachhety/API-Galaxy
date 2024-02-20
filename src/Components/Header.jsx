import React from 'react'
import Links from './Links'
import { Link } from 'react-router-dom'
import favicon from '../assets/API1.png'


function Header() {
    return (
        <div className='backGroundAnimate flex flex-col sm:flex sm:flex-row text-white min-w-full h-28 sm:h-16 text-sm sm:text-xl font-normal sm:tracking-wider font-sans items-center justify-between fixed top-0 left-0'>
            <Link className='backGroundAnimate flex flex-col w-12 sm:w-40 sm:h-40 sm:mt-8 rounded-full relative z-10'>
            <a href="./Home"></a><img className='sm:w-32 sm:h-32 sm:mt-8 sm:ml-4 relative' src={favicon} alt="" />
            </Link>
            <div className='flex flex-wrap justify-center gap-x-2 mx-2 sm:gap-x-8'>
               <Links to = "Home" text='Home'/>
               <Links to = "Weather" text='Weather'/>
               <Links to = "Dictionary" text='Dictionary'/>
               <Links to = "Currency" text='Currency'/>
               <Links to = "Recipe" text='Recipe'/>
               <Links to = "Location" text='Location'/>
               <Links to = "Password" text='Password Generator'/>
               <Links to = "Contact" text='Contact Us'/>
            </div>
            <a href="https://github.com/Vikash-Bachhety?tab=repositories" target='_blank'><button className='animate flex justify-center bg-rose-500 hover:scale-105 text-white sm:text-xl mt-2 sm:mt-0 font-normal w-24 h-6 sm:w-28 sm:h-8 rounded-lg sm:mr-10 border border-gray-100' >Git Hub</button></a>
        </div>
    )
}

export default Header