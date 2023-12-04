import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
// import './navbar.scss'

function Navbar() {
  const [openAdditional, setOpenAdditional] = useState(false);

  useEffect(() => {
    console.log("___ open additional :", openAdditional);
  }, [openAdditional])

  return (
    <div className='navbar-main-container'>
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
            <Link to='/news' className='linkTag' onClick={() => setOpenAdditional(false)} >News</Link>
          </li>
          <li className='listItems'>
            <Link to='/find-us' onClick={() => setOpenAdditional(true)}>Find US</Link>
          </li>
        </ul>
      </nav>
      {/* {openAdditional && (
        <div className='find-us-subContainer'>
          <ul>
            <li>CONTACT</li>
            <li>STOCKITS</li>
            <li>PRESS</li>
            <li>DOWNLOADS</li>
          </ul>
        </div>
      )} */}
    </div>
  )
}

export default Navbar