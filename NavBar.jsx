import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    < > 

    <nav id='navContainer'>
        <ul  className='listConatiner'>
        <NavLink to={"/"}><li>HOME</li></NavLink>
        <NavLink to={"/viewAll"}>View All</NavLink>
        </ul>
    </nav>
    </>
  )
}

export default NavBar