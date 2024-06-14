/* eslint-disable no-unused-vars */
import React from 'react'
import { AiFillCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col space-y-10 items-center py-8 w-full bg-card '>
        <div className="links">
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/'>Home</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/crypto'>Cryptocurrencies</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/exchange'>Exchanges</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/news/coin/:id'>News</Link></p>
        </div>
        <div className="socials flex justify-center items-center space-x-10 text-xl text-white">
            <FaFacebook className='cursor-pointer' />
            <FaTwitter className='cursor-pointer' />
            <FaMedium  className='cursor-pointer'/>
        </div>
        <div className="copy flex flex-col space-y-3 items-center justify-center">
            <p className='text-lg text-white'>All Rights Reserved</p>
            <div><AiFillCopyrightCircle className='text-xl text-white' /></div>
        </div>
      
    </div>
  )
}

export default Footer
