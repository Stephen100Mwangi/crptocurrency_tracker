/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBitcoin } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='flex flex-col space-y-10 min-h-screen bg-card w-fit justify-start items-center'>
        <div className="logo text-xl font-medium flex items-center justify-center p-8 flex-row space-x-3">
            <FaBitcoin className='text-3xl text-text'></FaBitcoin>
            <Link to='/' className='cursor-pointer text-text text-2xl'>CryptoVerse</Link>
        </div>
        <div className="navLinks flex flex-col w-full space-y-5 items-start justify-start">
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/'>Home</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/crypto'>Cryptocurrencies</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/exchange'>Exchanges</Link></p>
            <p className='hover:text-text font-medium bg-none w-full text-hover p-2 px-6 hover:bg-white cursor-pointer text-base font-sans'><Link to='/news'>News</Link></p>
        </div>
    </div>
  )
}

export default NavBar