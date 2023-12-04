import React from 'react'
import './findus.css'
import { Link } from 'react-router-dom'

function FindUs() {
  const pressList = [
    {
      id: 1,
      name: "BAR MAGAZINE",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Bar-whole-page-01-07-2011.pdf"
    },
    {
      id: 2,
      name: "CHOICE",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Choice-01-04-2011.pdf"
    },
    {
      id: 3,
      name: "FOOD CHOMPANION",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Food-Companion-Issue.png"
    },
    {
      id: 4,
      name: "HARVEY NICHOLS",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Harvey-Nichols-8.12.10.pdf"
    },
    {
      id: 5,
      name: "IMBIBE MAGAZINE",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Imbibe-Magazine-March-April-2010.pdf"
    },
    {
      id: 6,
      name: "INTERNATIONAL SPIRITS CHALLENGE",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Int-Spirits-Challenge.pdf"
    },
    {
      id: 7,
      name: "LUXURY LIFESTYLE.COM",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Luxury-Lifestyle.com-08.12.2010.pdf"
    },
    {
      id: 8,
      name: "QUINTESSENTIALLY BLOQ",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Quintessentially-bloq-11-02-2011.pdf"
    },
    {
      id: 9,
      name: "LICKERISH SPLIT",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/Screen-shot-2013-03-22-at-9.55.50-AM.png"
    },
    {
      id: 10,
      name: "PRESS RELEASE 2009",
      link: "https://www.ceylonarrack.com/wp-content/uploads/2014/07/PRESS-RELEASE-March-2009.pdf"
    },
  ]
  return (
    <div className='find-us-container'>
      <div className="top-nav-links">
        <ul>
          <li className='single-nav-link'>
            <a href='#contact'>CONTACT</a>
          </li>
          <li className='single-nav-link'>
            <a href='#stockist'>STOCKIST</a>
          </li>
          <li className='single-nav-link'>
            <a href='#press'>PRESS</a>
          </li>
          <li className='single-nav-link'>
            <a href='#download'>DOWNLOAD</a>
          </li>
        </ul>
      </div>

      <span id="sponsors">&nbsp;</span>
      <div className="sections-list">
        <section id='contact' className='contact-container'>
          <h1>contact</h1>
          <div className="address-container">
            <h2>Rockland Distilleries (Pvt) Ltd</h2>
            <h3>160/24 Kirimandala Mawatha Colombo 5, Sri Lanka</h3>
            <h3>T: +94 11 4426100</h3>
            <h3>info@ceylonarrack.com</h3>
          </div>
        </section>

        <section id='stockist' className='stockist-container'>
          <h1>stockist</h1>
        </section>

        <section id='press' className='press-container'>
          <h1>press</h1>
          <div className="press-display-list">
            {
              pressList.map((single) => (
                <div className='single-press-list-item'>
                  <h4 className='list-item-left'><a href={single.link}>{single.name}</a></h4>
                  <h4 className='list-item-right'><a  href={single.link}>OPEN TO SEE</a></h4>
                </div>
              ))
            }
          </div>
        </section>

        <section id='download' className='download-container'>
          <h1>download</h1>
        </section>
      </div>
    </div>
  )
}

export default FindUs