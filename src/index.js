import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import './css/App.css';
import SMBHeader from './components/SMBHeader';
import SMBFooter from './components/SMBFooter';
import reportWebVitals from './reportWebVitals';
import Carousel from './components/Carousel';
import IconSection from './components/IconSection';
import CustomerReviews from './components/CustomerReviews';
import MainCategories from './components/MainCategories';
import HorizontalInfiniteScroll from './components/HorizontalInfiniteScroll';
import {images} from './constants/CarouselData';

import cr_cardetial from './assets/cr_cardetial.jpg';
import cr_handyman from './assets/cr_handyman.jpg';
import cr_nurse from './assets/cr_nurse.jpg';

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
            <a href='.'>
              <img src={cr_nurse} alt={""} style={{height:'auto', width:"200px" ,margin: '40px 20px 0 40px', borderRadius: '5px'}} />
            </a>
            <a href='.'>
              <img src={cr_handyman} alt={""} style={{height:'auto', width:"200px" ,margin: '40px 20px 0 20px', borderRadius: '5px'}} />
            </a>
            <a href='.'>
              <img src={cr_cardetial} alt={""} style={{height:'auto', width:"200px" ,margin: '40px 20px  0 20px', borderRadius: '5px'}} />
            </a>
            
          </div>
          <div className='icon-section'>
            <IconSection />        
          </div>
        </section>
        <section>
          <MainCategories />
        </section>
        <section>
          <HorizontalInfiniteScroll />
        </section>
        <section>
          <MainCategories />
          <CustomerReviews />
        </section>
      </div>
    </body>
    <section>
      <SMBFooter />
    </section>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
