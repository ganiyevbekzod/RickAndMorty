import {  Link, NavLink } from 'react-router-dom';

import './header.css'

function Header() {
// {isActive} ? ("fs-5 text-white") :"fs-5 text-white text-decoration-none "}

  
    return(
        <header className="header bg-white shadow " >
   <div className='container' >
   <nav className='d-flex justify-content-between align-items-center my-1'>
    <Link to='/' className='text-black fs-5 text-decoration-none'>The Rick and Morty</Link>
<ul className='d-flex gap-4 list-unstyled m-0'>
  <li>
    <NavLink to="/" className={({isActive}) => isActive ? ("fs-5  text-black") : "fs-5 text-black  text-decoration-none"}  >Home</NavLink>
  </li>
  <li>
    <NavLink to="/location"  className={({isActive})=> isActive ? ("fs-5 text-black  ") : "fs-5 text-black  text-decoration-none" } >Location</NavLink>
  </li>
  <li>
    <NavLink to="/episode" className={({isActive}) => isActive ? ("fs-5 text-black  ") : "fs-5  text-black  text-decoration-none"}>Episode</NavLink>
  </li>
</ul>
    </nav>
   </div>
        </header>
    )
}
export default Header;