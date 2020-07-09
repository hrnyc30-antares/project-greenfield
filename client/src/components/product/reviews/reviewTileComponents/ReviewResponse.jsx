import React from 'react';

const ReviewResponse = (response) => {

  const renderResponse = (res) => {
    if (res !== 'null' && typeof res === 'string') {
      return (
        res
      )
    }
    
    return ('');
  }


  return (
    <div className="review-response" >
      {renderResponse(response)}
    </div>
  )
}

export default ReviewResponse;