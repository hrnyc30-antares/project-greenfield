import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewsTileList from './ReviewsTileList';
import reviews from '../../../redux/reducers/reviews';
import ProductRatings from './ProductRatings';
import ReviewsSort from './ReviewsSort';

const ProductReviews = ({ dispatch, loading, reviews, hasErrors, reviewsResultCount, meta}) => {

  const renderReviews = () => {
    // if (loading) return <p>Loading posts...</p>;
    // if (hasErrors) return <p>Unable to display posts.</p>;

    return (
        <ReviewsTileList reviews={reviews} count={reviewsResultCount}  />
    )
  }

  return (
    <>
    <h2>Ratings & Reveiws</h2>
    <div className='ratings-reviews'>
      <div className="product-ratings">
        <ProductRatings/>
      </div>
      <div>
        <ReviewsSort metaRatings={meta.ratings}/>
        {renderReviews()}
      </div>
    </div>
    </>
  )

  
};

const mapStateToProps = (state) => ({
  loading: state.reviews.loading,
  reviews: state.reviews.reviews,
  hasErrors: state.reviews.hasErrors,
  errors: state.reviews.errors,
  reviewsResultCount: state.reviews.reviewsResultCount,
  meta: state.ratings.meta,
})

export default connect(mapStateToProps)(ProductReviews);



/* 

Call to reviews API returns the following structure -->

 {product: "1", page: 0, count: 5, results: [{}, {}, ....] }

  Each result object contains --> 

  {
    "review_id": 57337,
    "rating": 5,
    "summary": "Et praesentium itaque at aut iste.",
    "recommend": 1,
    "response": null,
    "body": "Molestias sint aliquam. Repellendus qui laborum voluptatem exercitationem sed explicabo omnis et possimus. Fugit molestiae ut modi.",
    "date": "2020-05-17T00:00:00.000Z",
    "reviewer_name": "customer1",
    "helpfulness": 3,
    "photos": []
}

*/