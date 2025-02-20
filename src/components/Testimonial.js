import React from 'react';
import './Testimonial.css';
import testimonialLine from './images/testimonialimage.png';

function Testimonial() {
  return (
    <>
      <div className='testimonial-section'>
        <div className='testimonial-container'>
          <div className='testimonial-image-container'>
            <img
              className='testimonial-image'
              src={testimonialLine}
              alt='testimonial-line'
            />
          </div>
          <div
            className='quote-container'
            data-aos='fade-up'
            data-aos-offset='10'
            data-aos-duration='1000'
          >
            <h1>
              "she wouldn't take no <br />
              for an answer."
            </h1>
            <br />
            <p>- fran lebowitz</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
