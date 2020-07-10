import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewHelpfulness = ({helpfulness}) => {
  const { id } = useParams();
  const [helpfulCount, setHelpfulCount] = useState(helpfulness);
  const [disable, setDisable] = useState('helpful-on');


  const sendPutRequest = () => {
    fetch(`http://18.224.200.47/reviews/helpful/${id}`, {
      method: 'PUT',
    })
      .then(response => response.status) 
      .then(result => {
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const handleClick = (e) => {
    e.preventDefault();
    setHelpfulCount(helpfulCount + 1);
    sendPutRequest();
    if (disable === 'helpful-on') {
      setDisable('helpful-off')
    } else {
      setDisable('helpful-on')
    }
  }

  return (
    <>
      <div className={disable}>
        {`Helpful ?   `}
          <a className={disable} value={1} onClick={handleClick} href="">Yes</a>
        {`   ( ${helpfulCount} )`}
    </div>
    </>
  )
}

export default ReviewHelpfulness;