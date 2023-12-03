import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="socialMediaIcons">
        <a href='https://www.facebook.com/CeylonArrack1924'>
          <img src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/share-facebook.svg" width="42" height="42" alt='socialmedia01' />
        </a>
        <a href='https://twitter.com/ceylonarrack'>
          <img src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/share-twitter.svg" width="42" height="42" alt='socialmedia02' />
        </a>
        <a href='http://www.instagram.com/ceylonarrack'>
          {/* <img alt='socialmedia03' /> */}
          <img src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/share-instagram.svg" width="42" height="42" alt='socialmedia03' />
        </a>
        <a href='https://www.youtube.com/user/ceylonarrack'>
          <img src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/share-youtube.svg" width="42" height="42" alt='socialmedia04' />
        </a>
      </div>
      <div className="language-container">
        <ul>
          <li className='linkTag'>简体中文</li>
          <li className='linkTag'>Svenska</li>
          <li className='linkTag'>Русский</li>
          <li className='linkTag'>Nederlands</li>
          <li className='linkTag'>日本語</li>
          <li className='linkTag'>Italiano</li>
          <li className='linkTag'>Français</li>
          <li className='linkTag'>Español</li>
          <li className='linkTag'>English</li>
          <li className='linkTag'>Deutsch</li>
        </ul>
      </div>
      <div className="copyright-details">
        <p>© Copyright 2023 Rockland, All Rights Reserved. All trademarks are properties of their respective owners.40% Alc/Vol. Distilled by Rockland Distilleries, Sri Lanka</p>
      </div>
    </div>
  )
}

export default Footer