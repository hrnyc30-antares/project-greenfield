import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Images = ({
  dispatch,
  loading,
  currentStyle,
  currentPhoto,
  product,
  hasErrors,
}) => {
  if (loading) return <p>Loading product...</p>;
  if (hasErrors) return <p>Unable to display product.</p>;

  const renderThumbnails = () =>
    currentStyle.photos.map((urls, i) => (
      <div key={urls.url}>
        <img src={urls.thumbnail_url} alt={`Product Thumbnail${i}`} />
      </div>
    ));

  return (
    <div className="product-media">
      <div className="product-image-thumbnails">{renderThumbnails()}</div>
      <div className="product-image">
        <img src={currentPhoto.url} alt={product.name} />
      </div>
    </div>
  );
};

Images.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  currentStyle: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.object,
      PropTypes.string,
      PropTypes.array,
    ])
  ).isRequired,
  currentPhoto: PropTypes.objectOf(PropTypes.string).isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  dispatch: PropTypes.func.isRequired,
  loading: state.styles.loading,
  currentStyle: state.styles.currentStyle,
  currentPhoto: state.styles.currentPhoto,
  product: state.product.product,
  hasErrors: state.styles.hasErrors,
});

export default connect(mapStateToProps)(Images);
