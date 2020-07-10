import React, { useState } from 'react';
import { FormControl, NativeSelect, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchReviews, updateReviewSort } from '../../../redux/actions/reviewActions';

const ReviewsSort = ({dispatch, sort, reviewsResultCount, metaRatings}) => {
  const [name, setName] = useState('relevance');
  const { id } = useParams();
  // useEffect(() => {
  //   dispatch(fetchReviews(reviewCount, product.id));
  // }, [dispatch]);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
    dispatch(fetchReviews(reviewsResultCount, id, event.target.value));
    dispatch(updateReviewSort(event.target.value));
  };

  const getTotalReviews = (ratings) => {
    if (ratings != null || ratings !== undefined) {
      return Object.keys(ratings).reduce((accum, curr) => {
        return accum += ratings[curr]
      }, 0);
    }
    return '#'
  }

  return (
    <div className="reviews-sort">
      <div className="reviews-sort-text">
        {getTotalReviews(metaRatings)} reviews, sorted by
        </div>
      <div className="reviews-sort-form">
      <FormControl className={classes.formControl}>
        <NativeSelect
          value={name}
          name="sort"
          className={classes.selectEmpty}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value={"relevant"}>relevance</option>
          <option value={"newest"}>newest</option>
          <option value={"helpful"}>helpful</option>
        </NativeSelect>
      </FormControl>
      
      </div>
    </div>
  )
}


const mapStateToProps = (state) => ({
  sort: state.reviews.reviewsResultCount,
  reviewsResultCount: state.reviews.reviewsResultCount,
});

export default connect(mapStateToProps)(ReviewsSort);