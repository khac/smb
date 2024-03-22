import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css';
import SMBHeader from './components/SMBHeader';
import reportWebVitals from './reportWebVitals';
import Carousel from './components/Carousel';
import {images} from './constants/CarouselData';

import cr_cardetial from './assets/cr_cardetial.jpg';
import cr_carpentar from './assets/cr_carpentar.jpg';
import cr_handyman from './assets/cr_handyman.jpg';
import cr_nurse from './assets/cr_nurse.jpg';
import cr_restaurant from './assets/cr_restaurant.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      <div className="App">
        <SMBHeader />
        <section className="heading-section">
          <h1 className='heading'>
            Discover a local business near you.
          </h1>
          <div className='image-section'>
            <Carousel data={images.slides} />
            <img src={cr_cardetial} height='360px' width="200px" style={{margin: '40px 20px 20px', borderRadius: '5px'}} />
            {/* <img src={cr_carpentar} height='360px' /> */}
            <img src={cr_handyman} height='360px' width="200px" style={{margin: '40px 0px 20px', borderRadius: '5px'}} />
            <img src={cr_restaurant} height='360px' width="200px" style={{margin: '40px 20px 20px', borderRadius: '5px'}} />
          </div>
        </section>
        <section>
          xx3
        </section>
      </div>
    </body>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
