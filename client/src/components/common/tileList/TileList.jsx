import React from 'react';

const TileList = ({reviews, questions}) => {

  const renderList = () => {
    if (reviews) {
      return (
        <ul>
          {/* map over TileComponent here (Reviews) */}
          {reviews.results.map(review => {
            return (<li>{review.summary}</li>);
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
      <h3>Reviews/Questions List Component</h3>
      <div className="review-questions-list">
        {renderList()}
      </div>
      <button type="submit">View More</button>
      <button type="submit">Add</button>
    </>
  );
};

export default TileList;
