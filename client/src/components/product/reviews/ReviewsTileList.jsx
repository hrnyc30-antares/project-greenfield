import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import ReviewTiles from './ReviewTiles';
import AddReviewModal from './AddReviewModal';
import { fetchReviews } from '../../../redux/actions/reviewActions';

const TileList = ({dispatch, reviews, loading, hasErrors}) => {
  //console.log('this is reviews as TileList reloads', reviews);
  const [reviewCount, setCount] = useState(2);

  useEffect(() => {
    //console.log('this is fetch reviews in List component reRendering')
    dispatch(fetchReviews(reviewCount));
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const handleViewMoreClick = () => {
    dispatch(fetchReviews(reviewCount + 2));
    setCount(reviewCount + 2);
  }

  //console.log('this is the count', reviewCount);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderList = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return (
        <ul>
          {reviews.results.map(review => {
            return (<ReviewTiles reviews={review} key={review.review_id}/>);
          })}
        </ul>
    );
  };

  return (
    <>
      <div className="review-questions-list">
        {renderList()}
      </div>
      <div className="list-buttons-wrapper">
        <Button onClick={handleViewMoreClick} variant="contained" size="large">View More</Button>
        <Button onClick={handleOpen} variant="contained" size="large">Add a Review +</Button>
        <AddReviewModal handleClose={handleClose} open={open}/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.reviews.loading,
  reviews: state.reviews.reviews,
  reviewsResultCount: state.reviews.reviewsResultCount,
  hasErrors: state.reviews.hasErrors,
});

export default connect(mapStateToProps)(TileList);