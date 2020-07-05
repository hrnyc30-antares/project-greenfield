import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Images = () => <h2>Images</h2>;

Images.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  // key comes from reducers/index.js
  // value comes from reducers/productReducer.js
  dispatch: PropTypes.func.isRequired,
  loading: state.product.loading,
  product: state.product.product,
  hasErrors: state.product.hasErrors,
});

export default connect(mapStateToProps)(Images);
