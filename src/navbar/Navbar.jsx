import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
// import './navbar.scss'

function Navbar() {
  const [openSubNavCocktails, setOpenSubNavCocktails] = useState(false);

  // check url === cocktails inside of useEffect
  // and make setOpenSubNavCocktails(true)
  // reason : when refresh the browser, sub nav of the Cocktails screen is
  // hiding.

  const handleSubNavCocktails = (value) => {
    setOpenSubNavCocktails(value);
  }

  return (
    <div className='navbar-main-container'>
      <nav>
        <ul id='baseNavContainer'>
          <li className='listItems' onClick={() => handleSubNavCocktails(false)}>Our Arrack</li>
          <li className='listItems' onClick={() => handleSubNavCocktails(false)}>Process</li>
          <li className='listItems'>
            <Link to='/cocktails' onClick={() => handleSubNavCocktails(true)}>Cocktails</Link>
          </li>
          <li onClick={() => handleSubNavCocktails(false)}>
            <img
              src='https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/logo.svg'
              alt=''
              width='149px'
              height='149px'
            />
          </li>
          <li className='listItems' onClick={() => handleSubNavCocktails(false)}>Environment</li>
          <li className='listItems'>
            <Link
              to='/news'
              className='linkTag'
              onClick={() => {
                handleSubNavCocktails(false)
              }}
            >
              News
            </Link>
          </li>
          <li className='listItems'>
            <Link
              to='/find-us'
              onClick={() => {
                handleSubNavCocktails(false)
              }}
            >
              Find US
            </Link>
          </li>
        </ul>
        {openSubNavCocktails && (
          <div className="sub-nav-bar">
            <ul>
              <li>PUNCH</li>
              <li>TASTING</li>
              <li>INFUSIONS</li>
            </ul>
          </div>)
        }
      </nav>
    </div>
  )
}

export default Navbar