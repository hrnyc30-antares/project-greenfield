import React from 'react';
import { Button } from '@material-ui/core';
import ReviewTiles from '../../product/reviews/ReviewTiles';



const TileList = ({reviews, questions}) => {
  let add = "Question";


  const renderList = () => {
    if (reviews) {
      add = "Review"
      return (
        <ul>
          {reviews.results.map(review => {
            return (<ReviewTiles reviews={review} key={review.review_id}/>);
          })}
        </ul>
      );
    }
    return (
      <ul>
        {/* map over TileComponent here (Questions) */}
        <li>Questions Tiles</li>
      </ul>
    );
  };

  return (
    <>
      <div className="review-questions-list">
        {renderList()}
      </div>
      <div className="list-buttons-wrapper">
        <Button variant="contained" size="large">View More</Button>
        <Button variant="contained" size="large">Add a {add} +</Button>
      </div>
    </>
  );
};

export default TileList;


