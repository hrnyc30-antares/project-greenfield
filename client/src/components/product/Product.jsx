import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Overview from './overview/Overview';
import Images from './overview/Images';
import Details from './overview/Details';
import { fetchProduct } from '../../redux/actions/productActions';

const Product = ({ dispatch, loading, hasErrors }) => {
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchProduct(id));
  });
  return (
    <div className="content">
      <section>
        <Overview />
      </section>
      <section>
        <Images />
      </section>
      <section>
        <Details />
      </section>
    </div>
  );
};

export default Product;
