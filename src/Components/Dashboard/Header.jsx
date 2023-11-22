import React from 'react'
import "./dash.css"
import Logo from './Logo'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <NavBar/>
    </div>
  )
}

export default Header