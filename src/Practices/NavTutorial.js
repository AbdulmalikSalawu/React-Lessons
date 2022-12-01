import React, {useRef} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import './Nav.css'

function NavTutorial() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <div>
        <header>
            <h4 className='ms-5'>Logo</h4>
            <nav ref={navRef}>
                <NavLink onClick={showNavbar} to ='/about'>Home</NavLink>
                <NavLink onClick={showNavbar} to ='/products'>Our work</NavLink>
                <NavLink onClick={showNavbar} to='/profile'>Blog</NavLink>
                <NavLink onClick={showNavbar} to='/users'>About us</NavLink>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn nav-open-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    </div>
  )
}

export default NavTutorial