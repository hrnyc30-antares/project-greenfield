import React, {useEffect}from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviews } from '../../../redux/actions/reviewActions';
import TileList from '../../common/tileList/TileList';
import reviews from '../../../redux/reducers/reviews';
import ProductRatings from './ProductRatings';

const ProductReviews = ({ dispatch, loading, reviews, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const renderReviews = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    return (
        <TileList reviews={reviews} />
    )
  }

  return (
    <div>
      <ProductRatings/>
      <h2> Product Reviews </h2>
      {renderReviews()}
    </div>
  )

  
};

const mapStateToProps = (state) => ({
  loading: state.reviews.loading,
  reviews: state.reviews.reviews,
  hasErrors: state.reviews.hasErrors,
  errors: state.reviews.errors,
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