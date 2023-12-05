import React from 'react'
import './cocktails.css'
import Footer from '../footer/Footer';

function Cocktails() {
  const pageLinks = [
    {
      id: 1,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/tusker/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Tusker-640x800.jpg',
      spanText: 'Tusker',
    },
    {
      id: 2,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/toddy-tapper-copper-cup/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Toddy-Tapper-Copper-Cup-640x800.jpg',
      spanText: 'Toddy Tapper Copper Cup',
    },
    {
      id: 3,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/turbulent-truce/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Turbulent-Truce-640x800.jpg',
      spanText: 'Turbulent Truce',
    },
    {
      id: 4,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/old-ceylon/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Old-Ceylon-640x800.jpg',
      spanText: 'Old Ceylon',
    },
    {
      id: 5,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/1924/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/1924-640x800.jpg',
      spanText: '1924',
    },
    {
      id: 6,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/pasimayaga/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Pasimayaga-640x800.jpg',
      spanText: 'Pasimayaga',
    },
    {
      id: 7,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/arrack-julab/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Arrack-Julab-640x800.jpg',
      spanText: 'Arrack Julab',
    },
    {
      id: 8,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/orient-espresso/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Orient-Espresso-640x800.jpg',
      spanText: 'Orient Espresso',
    },
    {
      id: 9,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/island-currency/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Island-Currency-640x800.jpg',
      spanText: 'Island Currency',
    },
    {
      id: 10,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/kandy/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Kandy-640x800.jpg',
      spanText: 'Kandy',
    },
    {
      id: 11,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/ceylon-coconut-colada/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Ceylon-Coconut-Colada-640x800.jpg',
      spanText: 'Ceylon Coconut Colada',
    },
    {
      id: 12,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/ceylon-sour/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Ceylon-Sour-640x800.jpg',
      spanText: 'Ceylon Sour',
    },
    {
      id: 13,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/everlasting-summer/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Everlasting-Summer-640x800.jpg',
      spanText: 'Everlasting Summer',
    },
    {
      id: 14,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/coco-moratuwa/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/Coco-Moratuwa-640x800.jpg',
      spanText: 'Coco Moratuwa',
    },
    {
      id: 15,
      anchorTagLink: 'https://www.ceylonarrack.com/cocktail/aliya/',
      img: 'https://www.ceylonarrack.com/wp-content/uploads/2014/08/aliya-640x800.jpg',
      spanText: 'Aliya',
    },
  ];
  return (
    <div className='cocktails-container'>
      <div className="top-container">
        <div className="title">MAKING COCKTAILS</div>
        <div className="first-paragraph">
          <p>Ceylon Arrack is an excellent base for a number of classic cocktails, best mixed with soft, wine-based spirits, with syrups and with natural fruits. It is beautifully paired with citrus fruits such as lemon, lime or orange; and with ingredients as diverse as chocolate, coffee, ginger, almond and coconut. </p>
        </div>
      </div>
      <div className="middle-container">
        <div className="grid-container">
          {/* Your grid items go here */}
          {
            pageLinks.map((single) => (
              <div className="grid-item">
                <img src={single.img} alt='' />
                <span className='text-on-image'>{single.spanText}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className="bottom-container">
        <div className="last-paragraph">
          <p>Ceylon Arrack is also well balanced with spirits that range from sherry and vermouth to rum, brandy and tequila. The arrack draws out and enhances even the subtlest of flavours, such as that of green tea or Calvados. A dash of bitters can be used with Ceylon Arrack to add an additional layer of complexity or to round off the finish.</p>
        </div>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Cocktails