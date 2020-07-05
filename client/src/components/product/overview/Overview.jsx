import React from 'react';

// import Images from './Images';
import Details from './Details';
import Description from './Description';

const Overview = () => (
  <div>
    <div className="product-main">
      <div className="product-media">{/* <Images /> */}</div>

      <Details />
    </div>
    <Description />
  </div>
);

export default Overview;
