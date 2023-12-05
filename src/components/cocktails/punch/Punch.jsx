import React from 'react'
import './punch.css'
import { motion } from 'framer-motion'
import Footer from '../../footer/Footer'

function Punch() {

    const pageLinks = [
        {
            id: 1,
            link: 'https://www.ceylonarrack.com/cocktail/champagne-punch/',
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Champagne-Punch-640x800.jpg',
            span: 'Sunset Champagne Punch',
        },
        {
            id: 2,
            link: 'https://www.ceylonarrack.com/cocktail/ruby-punch/',
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Ruby-Punch-640x800.jpg',
            span: 'Ruby Punch',
        },
        {
            id: 3,
            link: "https://www.ceylonarrack.com/cocktail/perfect-serve/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon-perfect-serve-800x1000.jpg',
            span: 'Perfect Serve',
        },
        {
            id: 4,
            link: "https://www.ceylonarrack.com/cocktail/swedish-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon_swedish-punch-800x1000.jpg',
            span: 'Swedish Punch',
        },
        {
            id: 5,
            link: "https://www.ceylonarrack.com/cocktail/apple-eve/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon_apple-eve-800x1000.jpg',
            span: 'Apple & Eve',
        },
        {
            id: 6,
            link: "https://www.ceylonarrack.com/cocktail/presidency-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Presidency-Punch-640x800.jpg',
            span: 'Presidency Punch',
        },
        {
            id: 7,
            link: "https://www.ceylonarrack.com/cocktail/island-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon-island_punch-800x1000.jpg',
            span: 'Island Punch',
        },
        {
            id: 8,
            link: "https://www.ceylonarrack.com/cocktail/tappers-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Tappers-Punch-640x800.jpg',
            span: 'Tapper’s Punch',
        },
        {
            id: 9,
            link: "https://www.ceylonarrack.com/cocktail/flaming-mulled-wine-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon_flaming-red-wine-800x1000.jpg',
            span: 'Flaming Mulled Wine Punch',
        },
        {
            id: 10,
            link: "https://www.ceylonarrack.com/cocktail/milk-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Milk-Punch-640x800.jpg',
            span: 'Milk Punch',
        },
        {
            id: 11,
            link: "https://www.ceylonarrack.com/cocktail/dickenss-arrack-punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon_dickens-arrack-punch-800x1000.jpg',
            span: 'Dickens’s Arrack Punch',
        },
        {
            id: 12,
            link: "https://www.ceylonarrack.com/cocktail/punch/",
            img: 'https://www.ceylonarrack.com/wp-content/uploads/2017/08/ceylon_punch-800x1000.jpg',
            span: 'Punch',
        },
    ]

    return (
        <div className='punch-container'>
            <div className="top-container">
                <div className="title">MAKING PUNCH</div>
                <div className="first-paragraph">
                    <p>Ceylon Arrack marries with a wealth of different ingredients inside a punch bowl. The possibilities of punch are endless. It is a drink with which to exercise creativity, to experiment, to let one's imagination run wild. Here are some of our favourite recipes. </p>
                </div>
            </div>

            <div className="middle-container">
                <div className="grid-container">
                    {/* Your grid items go here */}
                    {
                        pageLinks.map((single) => (
                            <div className="grid-item">
                                <img className='single-map-image' src={single.img} alt='' onClick={() => console.log("___4")} />
                                <motion.span className='text-on-image'>{single.span}</motion.span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bottom-container">
                <div className="last-paragraph">
                    <p>While arrack is arguably the original base spirit for punch, we believe that it is still one of the finest. Its gentle floral notes and hints of citrus, honey and praline allow it to both enhance and be enhanced by other natural flavours.</p>
                </div>
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Punch