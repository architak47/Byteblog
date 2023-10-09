import React from 'react'
import logo from '../assets/logo.png'
import anotherlogo from '../assets/anotherlogo.jpg'

function Logo({width = '100px'}) {
  return (
    <div>
      <img className='h-10' src={logo} alt='my logo' />
    </div>
  )
}

export default Logo