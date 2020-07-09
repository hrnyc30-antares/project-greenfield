import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReviewsTileList from './ReviewsTileList';
import reviews from '../../../redux/reducers/reviews';
import ProductRatings from './ProductRatings';

const ProductReviews = ({ dispatch, loading, reviews, hasErrors, reviewsResultCount, product }) => {

  const renderReviews = () => {
    // if (loading) return <p>Loading posts...</p>;
    // if (hasErrors) return <p>Unable to display posts.</p>;

    return (
        <ReviewsTileList reviews={reviews} count={reviewsResultCount} productId={product.id} />
    )
  }

  return (
    <div className='ratings-reviews'>
      <div className="product-ratings">
        <ProductRatings/>
      </div>
      <div>
        {renderReviews()}
      </div>
    </div>
  )

  
};

const mapStateToProps = (state) => ({
  loading: state.reviews.loading,
  reviews: state.reviews.reviews,
  hasErrors: state.reviews.hasErrors,
  errors: state.reviews.errors,
  reviewsResultCount: state.reviews.reviewsResultCount,
  product: state.product.product,
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