import React, {useEffect}from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchReviewsMeta } from '../../../redux/actions/ratingActions';
// import TileList from '../../common/tileList/TileList';
import ratings from '../../../redux/reducers/ratings';
import { getAverage, percentOfWhole, totalRatings } from './ReviewHelpers';
import StarRatings from './StarRatings';
import RatingsBars from './RatingsBars';

const ProductRatings = ({dispatch, meta, hasErrors, loading, errors}) => {

  useEffect(() => {
    dispatch(fetchReviewsMeta());
  }, [dispatch]);


  const renderReviews = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;

    let {'5': five = 0, 
        '4': four = 0, 
        '3': three = 0, 
        '2': two = 0, 
        '1': one = 0} = meta.ratings;

    const averageRating = getAverage(meta.ratings);
    const allRatings = [five, four, three, two, one];
    const total = totalRatings(allRatings);
    const ratingsPercentage = percentOfWhole(allRatings, total);
    const recommendPercentage = percentOfWhole([meta.recommended['1']], total)

    return (
      <>
        <StarRatings value={averageRating}/>
        <div className="percentage-recommended"> 
          {recommendPercentage[0]}% of reviews recommend this product
        </div>
        {ratingsPercentage.map((percentage, i) => {
          return (<RatingsBars value={percentage} rating={5 - i} key={i}/>)
        })}
      </>
    )
  }


  return (
    <div>
      <h2>Ratings & Reveiws</h2>
      {renderReviews()}
    </div>
  )

  
};


const mapStateToProps = (state) => ({
  loading: state.ratings.loading,
  meta: state.ratings.meta,
  hasErrors: state.ratings.hasErrors,
  errors: state.ratings.errors,
})


export default connect(mapStateToProps)(ProductRatings);


/*
Call to API for reviews meta data will return -> 
{ product_id: "1", ratings: {…}, recommended: {…}, characteristics: {…} }

  Ratings is one object containing -> 
  {1: 1, 3: 2, 4: 1, 5: 4} // so like, there are 4 number 5 ratings (5:4)

  Recommneded is one object containing -> 
  {0: 4, 1: 4}   // represents true or false (yes/no)  


  Characteristics is an object with multiple objects -> 
   {Fit: {…}, Length: {…}, Comfort: {…}, Quality: {…}}

      *individual objects contain -> 
        Comfort -> {id: 3, value: "3.5000"}
        Fit-> {id: 1, value: "3.0000"}
        Length -> {id: 2, value: "2.7500"}
        Quality -> {id: 4, value: "3.0000"}

*/