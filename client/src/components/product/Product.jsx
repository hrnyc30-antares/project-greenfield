import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Overview from './overview/Overview';
import { fetchProduct } from '../../redux/actions/productActions';
import { fetchStyles } from '../../redux/actions/stylesActions';

import ProductReviews from './reviews/ProductReviews';

const Product = ({ dispatch }) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
    dispatch(fetchStyles(id));
  });
  return (
    <div className="content">
      <section>
        <Overview />
      </section>
      <section>{/* Q&A */}</section>
      <section>
        <ProductReviews/>
      </section>
    </div>
  );
};

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, null)(Product);
