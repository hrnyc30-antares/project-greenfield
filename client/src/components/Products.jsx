import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/actions/productActions';

const Products = ({ dispatch, loading, products, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderProducts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return products.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id}>
        <div>
          <h3>{product.name}</h3>
          <p>{product.default_price}</p>
        </div>
      </Link>
    ));
  };

  return (
    <div>
      <h1>Products</h1>
      {renderProducts()}
    </div>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  // key comes from reducers/index.js
  // value comes from reducers/productReducer.js
  loading: state.products.loading,
  products: state.products.products,
  hasErrors: state.products.hasErrors,
});

export default connect(mapStateToProps)(Products);
