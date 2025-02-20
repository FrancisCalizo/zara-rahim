import React from 'react';
import './Advisor.css';
import advisorLine from './images/advisorimage.png';

function Advisor() {
  return (
    <>
      <div className='advisor-section'>
        <div className='advisor-container'>
          <div className='advisor-image-container'>
            <img
              className='advisor-image'
              src={advisorLine}
              alt='advisor-line'
            />
          </div>
          <div className='description-container'>
            <h1
              className='advisor-description'
              data-aos='fade-up'
              data-aos-offset='10'
              data-aos-duration='1000'
            >
              zara rahim is a strategic advisor to <br />
              business leaders, startups, artists, <br />
              musicians, brands, media entities, meme- <br />
              lords, comedians, accidental villans, <br />
              heroes, and friends.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advisor;
