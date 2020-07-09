import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

const ReviewRecommended = ({recommendation}) => {
  const renderRecommend = (recommend) => {
    if (recommend === 1) {
      return (
        <>
        <div className="recommend-check-icon">
          <CheckIcon/>
        </div>
        <div className="recommend-tag">{"I recommend this product"}</div>
        </>
      )
    }
    
    return ('');
  }


  return (
    <div className="reviewer-recommended" style={{marginTop: 10, fontSize: 12}}>
      {renderRecommend(recommendation)}
    </div>
  )
}



export default ReviewRecommended;