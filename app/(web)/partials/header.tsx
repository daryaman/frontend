"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import IcoAgent from '../../../assets/icons/real_estate_agent.svg'
import IcoMenu from '../../../assets/icons/menu.svg'
import Link from 'next/link'

const WebHeader = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='flex flex-col py-5 w-10/12 max-w-4xl md:flex md:flex-row justify-between'>
      <div className="flex flex-row justify-between">

        <div className='flex flex-row'>

          <Image
            src={IcoAgent}
            alt="Picture of the author"
            className=''
          />
          <h1 className='font-extrabold ml-3'>DARYAMAN</h1>
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
      <div className={`${isOpen ? 'flex' : 'hidden'} transition ease-in-out`}>
        <ul className='flex flex-col mt-5 space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:mt-0'>
          <li className='md:px-2'><Link href={'/'}>Home</Link></li>
          <li className='md:px-2'><Link href={'/post'}>Post</Link></li>
          <li className='md:px-2'><Link href={'/about'}>About</Link></li>
          <li className='md:px-2'><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </div>

      {/* Show at medium screen */}
      <div className='hidden md:flex'>
        <ul className='flex flex-col mt-5 space-y-3 md:flex-row md:space-x-3 md:space-y-0 md:mt-0'>
        <li className='md:px-2'><Link href={'/'}>Home</Link></li>
          <li className='md:px-2'><Link href={'/post'}>Post</Link></li>
          <li className='md:px-2'><Link href={'/about'}>About</Link></li>
          <li className='md:px-2'><Link href={'/contact'}>Contact</Link></li>
        </ul>
      </div>

    </nav>
  )
}

export default WebHeader