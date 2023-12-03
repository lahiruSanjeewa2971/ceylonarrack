import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
// import './navbar.scss'

function Navbar() {
  return (
    <div>
      <nav>
        <ul id='baseNavContainer'>
          <li className='listItems'>Our Arrack</li>
          <li className='listItems'>Process</li>
          <li className='listItems'>Cocktails</li>
          <li>
            <img 
              src='https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/logo.svg' 
              alt='' 
              width='149px' 
              height='149px' 
            />
          </li>
          <li className='listItems'>Environment</li>
          <li className='listItems'>
            <Link to='/news' className='linkTag' >News</Link>
          </li>
          <li className='listItems'>Find US</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar