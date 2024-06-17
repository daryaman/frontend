"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IcoAgent from '../../../assets/icons/real_estate_agent.svg'
import IcoMenu from '../../../assets/icons/menu.svg'
import Link from 'next/link'

const MainHeader = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex flex-col py-5 w-10/12 max-w-4xl md:flex md:flex-row justify-between'>
      <div className="flex flex-row justify-between">

        <div className='flex flex-row'>

          <h1 className='font-extrabold mr-3'>DARYAMAN</h1>
          <Image
            src={IcoAgent}
            alt="Picture of the author"
            className=''
          />
        </div>

        <button
          onClick={() => {
            setIsOpen(!isOpen)
          }}>

          <Image
            src={IcoMenu}
            alt="Burger icon"
            className='md:hidden'
          />
        </button>
      </div>

      {/* At small screen with togler */}
      <div className={`${isOpen ? 'flex' : 'hidden'} bg-slate-900`}>
        <ul className='flex flex-col mt-5 space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:mt-0'>
          <li className='md:px-2'>Home</li>
          <li className='md:px-2'>Portfolio</li>
          <li className='md:px-2'>About</li>
          <li className='md:px-2'>Contact</li>
        </ul>
      </div>

      {/* Show at medium screen */}
      <div className='hidden md:flex'>
        <ul className='flex flex-col mt-5 space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:mt-0'>
          <li className='md:px-2'>Home</li>
          <li className='md:px-2'>Portfolio</li>
          <li className='md:px-2'>About</li>
          <li className='md:px-2'>Contact</li>
        </ul>
      </div>

    </nav>
  )
}

export default MainHeader