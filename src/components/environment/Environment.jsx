import React from 'react'
import './environment.css'
import Footer from '../footer/Footer'

function Environment() {
  return (
    <div className='environment-container'>
      <section className='environment-section'>
        <div className="env-first-container">
          <h2>A natural high</h2>
        </div>
      </section>
      <section className='environment-section'>
        <div className="env-second-container">
          <p>The Rockland Distillery wholeheartedly believes in being green, taking many measures to reduce its carbon footprint. We are proud to be one of the first green distilleries with a LEED (Leadership in Energy and Environmental Design) certification from the U.S. Green Building Council.</p>
        </div>
      </section>
      <section className='environment-section'>
        <div className="env-third-container">
          <div className="env-third-container-left">
            <h2></h2>
            <p>Any waste left over from the distillation process, for example, is biodegraded without the need for electricity-draining machinery. It’s gently cooled, fed first to anaerobic digesters, then aerobically digested by natural bacteria in the estate ponds.</p>
            <h2></h2>
          </div>
          <div className="env-third-container-right"></div>
        </div>
      </section>
      <section className='environment-section'>
        <div className="env-fourth-container">
          <div className="env-fourth-container-left">
            <div className="inside-image"></div>
          </div>
          <div className="env-fourth-container-right">
            <h2></h2>
            <p>We recycle wherever possible, and often in imaginative ways – harvesting the ponds’ mineral-rich water hyacinth plants and using them as tree fertilizer, or capturing biogas and using it as substitute fuel to fire our boilers.</p>
            <h2></h2>
          </div>
        </div>
      </section>
      <section className='environment-section'>
        <div className="env-fifth-container">
          <div className="env-fifth-container-left">
            <h2></h2>
            <p>We purposefully grow our own Halmilla trees, which, when old enough, will be harvested to make Ceylon Arrack casks, therefore contributing to the prevention of the logging of natural forests.</p>
            <h2></h2>
          </div>
          <div className="env-fifth-container-right">
            <div className="fifth-inside-image"></div>
          </div>
        </div>
      </section>
      <section className='environment-section'>
        <div className="env-sixth-container">
          <div className="env-sixth-container-left">
            <div className="sixth-inside-image"></div>
          </div>
          <div className="env-sixth-container-right">
            <h2></h2>
            <p>We are also passionate about wildlife, especially our native elephants, contributing to the conservation of wildlife in Sri Lanka with every single bottle of Ceylon Arrack sold. </p>
            <h2></h2>
          </div>
        </div>
      </section>
      <section className='footer-section'>
        <div className="footer-container" style={{
          marginTop: '0px',
          // height: '100px'
        }}>
          <Footer />
        </div>
      </section>
    </div>

  )
}

export default Environment