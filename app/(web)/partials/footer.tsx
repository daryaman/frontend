import React from 'react'

const WebFooter = () => {
  return (
    <div className='flex flex-row py-5 space-x-20 w-10/12 max-w-4xl'>
      <ul className='flex flex-col space-y-1'>
        <li>Home</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className='flex flex-col space-y-1'>
        <li>News</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  )
}

export default WebFooter