import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const StarRatings = ({value}) => {
  return (
    <div className="ratings-wrapper">
      <div className="average-rating">
          {value}
      </div>
      <div className="average-rating-stars">
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={value} precision={0.25} readOnly />
        </Box>
      </div>
    </div>
  );
}

export default StarRatings;