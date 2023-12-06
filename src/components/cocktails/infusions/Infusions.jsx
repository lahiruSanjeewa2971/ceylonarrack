import React from 'react'
import './infusions.css'
import Footer from '../../footer/Footer'

function Infusions() {
    return (
        <div className='infusions-container'>
            <div className="first-container">
                <div className="first-sub-container">
                    <h2>Creating infusions</h2>
                    <p>When it comes to creating infusions, once you’ve tried it, Ceylon Arrack will almost certainly become your spirit of choice. It enhances many different ingredients and brings wonderful, undiscovered layers of flavour notes to the palate. It is excellent for creating infusions of herbs, spices, nuts, coconut, tea, coffee, ginger, rose, elderflower, raisins, apricots, dried orange peel, apples, pears or many other exotic ingredients. The resulting infusion is sublime and perfectly balanced.</p>
                </div>
            </div>
            <div className="second-container">
                <div className="second-sub-container">
                    <h2 className='second-container-title'>Making spice-infused Ceylon Arrack</h2>
                    <h2 className='second-container-paragraph'>A family favourite infusion, originally created in the early 1930s</h2>
                    <div className="sub-image-container">
                        <div className="first-sub-image-container">
                            <h3>Ingredients</h3>
                        </div>
                        <div className="second-sub-image-container">
                            <div className="first-image-set">
                                <div className="first-image">
                                    <img className='ingredient-image' src='https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/infusions/cinnamon.png' alt='' />
                                    <h4>2 cinnamon sticks</h4>
                                </div>
                                <div className="second-image">
                                    <img className='ingredient-image' src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/infusions/cloves.png" alt='' />
                                    <h4>15 cloves</h4>
                                </div>
                            </div>

                            <div className="second-image-set">
                                <div className="third-image">
                                    <img className='ingredient-image' src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/infusions/cardamom.png" alt='' />
                                    <h4>10 cardamom pods</h4>
                                </div>
                                <div className="fourth-image">
                                    <img className='ingredient-image' src="https://www.ceylonarrack.com/wp-content/themes/template_1_2/images/infusions/orange-peel.png" alt='' />
                                    <h4>2 1-inch pieces of fresh orange peel</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-container">
                <div className="third-sub-container">
                    <h2 className='third-container-title'>
                        How to infuse
                    </h2>
                    <p className='third-container-paragraph'>
                        Decant the Ceylon Arrack into a bowl, add the spices and let the spices infuse for a minimum of 12 hours, setting the bowl in a cool, dry place. Stir gently every three hours.
                    </p>
                </div>
            </div>
            <div className="footer-container" style={{
                marginTop: '0px'
            }}>
                <Footer />
            </div>
        </div>
    )
}

export default Infusions