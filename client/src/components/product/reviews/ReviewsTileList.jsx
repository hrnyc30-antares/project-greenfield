import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReviewTiles from './ReviewTiles';
import AddReviewModal from './AddReviewModal';
import { fetchReviews } from '../../../redux/actions/reviewActions';

const TileList = ({dispatch, reviews, loading, hasErrors, product}) => {
  const [reviewCount, setCount] = useState(2);
  const { id } = useParams();

  // useEffect(() => {
  //   dispatch(fetchReviews(reviewCount, product.id));
  // }, [dispatch]);
  const [open, setOpen] = useState(false);

  const handleViewMoreClick = () => {
    dispatch(fetchReviews(reviewCount + 2, id));
    setCount(reviewCount + 2);
  }

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
        <AddReviewModal handleClose={handleClose} open={open} product={product}/>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.reviews.loading,
  reviews: state.reviews.reviews,
  reviewsResultCount: state.reviews.reviewsResultCount,
  hasErrors: state.reviews.hasErrors,
  product: state.product.product,
  
});

export default connect(mapStateToProps)(TileList);