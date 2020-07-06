import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 0,
    width: 100,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 0,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const RatingsBars = ({value, rating}) => {
  return (
    <div className="ratings-breakdown">
    <div className="rating-amount">
      {rating} stars 
    </div>
    <div className="ratings-bar">
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
    </div>
  );
}

export default RatingsBars;