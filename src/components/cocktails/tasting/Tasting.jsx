import React from 'react'
import './tasting.css'

function Tasting() {
    return (
        <div className='tasting-container'>
            <section
                style={{ margin: '0px', padding: '0px' }}
                className={['single-section']}
            >
                <div className="first-section">
                    <div className="first-section-left-container">
                        <h2>The original base spirit for punch</h2>
                        <p>Since the 1600s, or even earlier, arrack has been used as the base spirit for numerous different types of punch. It is still widely used in punch cocktails today, thanks to its versatility and ability to both enhance and be enhanced by other natural flavours.</p>
                    </div>

                    <div className="first-section-right-container">
                        <img className='first-image' src='https://www.ceylonarrack.com/wp-content/uploads/2014/09/punch-bowl.png' alt='' />
                    </div>
                </div>
            </section>
            <section
                style={{ margin: '0px', padding: '0px', backgroundColor: '#f3ad89' }}
                className={['single-section']}
            >
                <div className="second-section">
                    <div id='second-section-title' className="second-section-title">
                        <h2>Tasting notes</h2>
                    </div>
                    <div id='second-section-paragraph' className="second-section-paragraph">
                        <p>An unexpected floral nose takes you by surprise to reveal a wonderful multifaceted spirit with which you make an instant connection but on which you cannot quite put your finger, demanding another sip, enticing you to explore further. Then finally surprising you with its smoothness, leaving you with a cosy, warming sensation.</p>
                    </div>
                    <div id='second-section-nose' className="second-section-nose">
                        <h3 className='bottom-text-title'>The Nose</h3>
                        <p className='bottom-text-paragraph'>Floral on the nose with hints of praline.</p>
                    </div>
                    <div id='second-section-pallet' className="second-section-pallet">
                        <h3 className='bottom-text-title'>The pallet</h3>
                        <p className='bottom-text-paragraph'>An unusual, multilayered flavour profile, with notes of agricole rum, a hint of reposado tequila and traces of citrus, honey and praline in the background.</p>
                    </div>
                    <div id='second-section-finish' className="second-section-finish">
                        <h3 className='bottom-text-title'>The finish</h3>
                        <p className='bottom-text-paragraph'>A smooth, dry rum finish.</p>
                    </div>
                    <div id='second-section-image' className="second-section-image">
                        <img className='second-image' src='https://www.ceylonarrack.com/wp-content/uploads/2014/09/palms.png' alt='' />
                    </div>
                </div>
            </section>
            <section
                style={{ margin: '0px', padding: '0px' }}
                className={['single-section']}
            >
                <div className="third-section">
                    <div id='third-section-title' className="third-section-title">
                        <h2>The perfect serve</h2>
                    </div>
                    <div id='third-section-paragraph' className="third-section-paragraph">
                        <p>Originally drunk with coconut water by local Sri Lankan islanders, Ceylon Arrack is equally delicious when mixed with ginger beer or ginger ale, or blended as a base spirit in myriad cocktails. Our favourite way to serve it, however, is straight from the coconut shell.</p>
                    </div>
                    <div id='third-section-image' className="third-section-image">
                        <img className='third-image' src='https://www.ceylonarrack.com/wp-content/uploads/2014/09/bottle.png' alt='' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tasting