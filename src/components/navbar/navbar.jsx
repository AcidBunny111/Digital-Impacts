import react from 'react'
import './navbar.css'
import logo1 from '../../assets/images/logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <nav className='nav'>
        <div>
            <img className='logo' src={logo1} alt="logo" />
        </div>
        <ul className='navlinks'>
          <li className='navlink' ><Link to="/">Home</Link></li>
          <li className='navlink'><Link to="/services">Services</Link></li>
          <li className='navlink'><Link to="/about">About Us</Link></li>
          <li className='navlink'><Link to="/portfolio">Portfolio</Link></li>
        </ul>

        <button className='contactus'> Contact Us </button>
      </nav>
      </div>
    </>
  )
}
  


export default Navbar
