import React from 'react';

import Details from './Details';
import Images from './Images';
import Description from './Description';

const Overview = () => (
  <div>
    <div>
      <Images />

      <Details />
    </div>
    <Description />
  </div>
);

export default Overview;
