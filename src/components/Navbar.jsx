import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/5305/5305730.png"
        alt=""
        className="logo"
      />

      <ul>
        <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='program' smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-150}>About Us</Link></li>
        <li><Link to='campus' smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} duration={500} offset={-260} className='btn'>Contact Us</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
