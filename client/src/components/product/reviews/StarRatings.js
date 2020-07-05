import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const StarRatings = ({value}) => {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} precision={0.25} readOnly />
      </Box>
    </div>
  );
}

export default StarRatings;