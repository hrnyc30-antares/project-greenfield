import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Overview from './overview/Overview';
import { fetchProduct } from '../../redux/actions/productActions';
import { fetchStyles } from '../../redux/actions/stylesActions';

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
      <section>{/* Ratings */}</section>
    </div>
  );
};

Product.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, null)(Product);
