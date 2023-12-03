import React from 'react'
import './news.css'
import Footer from '../../components/footer/Footer'

function News() {
  return (
    <div className='news-container'>
      <div className="news-subContainer">
        {/* <div className="insideContainer"> */}
        <div className="topImageContainer">
          {/* hi */}
          <img
              src="https://www.ceylonarrack.com/wp-content/uploads/2014/10/DSC_1644-747x420.jpg"
              alt=''
            // width='747'
            // height='420'
            />
        </div>
        <div className="bottomSubContainer">
          <h2 className='firstText'>Packing a Punch</h2>
          <h2 className='secondText'>28 October 2014</h2>
          <h3>SHARE</h3>
          <div className="social-media-icons">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 173.833 173.833" enable-background="new 0 0 173.833 173.833" class="svg svg-edit facebook-icon replaced-svg">
                <circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="86.92" cy="86.92" r="85.42"></circle>
                <path fill="#010101" d="M111.517,34.435v17.692h-10.668c-3.123,0-5.6,1.872-5.6,4.539v11.5h16.268l-1.602,18.167H95.25v53h-22  V86.884h-10.5V67.666h10.5V55c0-8.667,7.333-21.334,20-21.334C105.916,33.666,111.517,34.435,111.517,34.435"></path>
              </svg>
            </a>

            <a>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 173.833 173.833" enable-background="new 0 0 173.833 173.833" class="svg svg-edit twitter-icon replaced-svg">
                <circle fill="none" stroke="#000000" stroke-width="3" stroke-miterlimit="10" cx="86.92" cy="86.92" r="85.42"></circle>
                <path fill="#000000" d="M117.833,58.166c0,0,7.333-1.499,11.833-4.333c0.167,2.166-4.502,8.334-7.833,10  c4.165-0.667,8.165-1.667,10.5-2.167c-1.667,2.667-7,7.167-9,9c0,28.333-21.335,56.5-53.167,56.5c-7.833,0-21.5-2.834-28.666-8.667  c5.333,0.667,20.833-1,26.833-8c-4.667-0.166-14-3.333-17.333-13.333c3.666,1.5,6.833,1.001,8.5,0.167  c-6-1.334-14.334-8-15.167-18.5c2,1.666,6.5,2,8.5,1.833c-5-2.333-8.333-11.001-8.333-15.667s2.5-9.166,2.5-9.166  c2.5,4.333,22.476,19.5,38.487,19.5c-2.154-5.334,2.346-23,18.347-23C110.333,52.333,115.165,54.999,117.833,58.166"></path>
              </svg>
            </a>
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="133.465" height="42.246" viewBox="0 0 133.465 42.246" enable-background="new 0 0 133.465 42.246" class="svg svg-edit motif replaced-svg">
              <defs>
                <rect id="SVGID_1_" width="133.465" height="42.246"></rect>
                <rect id="SVGID_3_" width="133.465" height="42.246"></rect>
                <rect id="SVGID_5_" width="133.465" height="42.246"></rect>
              </defs>
              <g>
                <line clip-path="url(#SVGID_2_)" fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" y1="0.25" x2="16.732" y2="0.25"></line>
              </g>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="6.854" y1="1.658" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="4.885" y1="3.763" x2="16.733" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="8.359" y1="4.26" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="4.902" y1="8.732" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="11.126" y1="6.248" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="11.865" y1="8.754" x2="16.732" y2="0.251"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="14.768" y1="7.332" x2="16.732" y2="0.25"></line>
              <g>
                <line clip-path="url(#SVGID_4_)" fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="16.732" y1="42.246" x2="16.732" y2="0.25"></line>
              </g>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="18.697" y1="7.332" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="21.633" y1="8.732" x2="16.733" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="22.322" y1="6.248" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="28.562" y1="8.732" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="25.11" y1="4.26" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="28.562" y1="3.763" x2="16.732" y2="0.25"></line>
              <line fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="26.605" y1="1.658" x2="16.732" y2="0.25"></line>
              <g>
                <line clip-path="url(#SVGID_6_)" fill="none" stroke="black" stroke-width="0.5" stroke-miterlimit="10" x1="133.465" y1="0.25" x2="16.733" y2="0.25"></line>
              </g>
            </svg> */}
        </div>
        {/* </div> */}
      </div>
      <div className="footerComponent">
        <Footer />
        {/* hi */}
      </div>
    </div>
  )
}

export default News