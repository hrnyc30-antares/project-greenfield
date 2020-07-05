import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Description = ({ loading, product, hasErrors }) => {
  const renderFeatures = () =>
    product.features.map((feature) => (
      <li key={feature.feature}>
        {feature.feature}: <span>{feature.value}</span>
      </li>
    ));

  const renderDescription = () => {
    if (loading) return <p>Loading product...</p>;
    if (hasErrors) return <p>Unable to display product.</p>;
    return (
      <div className="product-additional">
        <div className="product-description">
          <h3>{product.slogan}</h3>
          <p>{product.description}</p>
        </div>
        {Object.prototype.hasOwnProperty.call(product, 'features') ? (
          <div className="product-features">
            <ul>{renderFeatures()}</ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  return <>{renderDescription()}</>;
};

Description.propTypes = {
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

export default connect(mapStateToProps)(Description);
