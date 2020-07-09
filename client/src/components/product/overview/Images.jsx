import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FullscreenIcon } from '@material-ui/icons';

const Images = ({ dispatch, loading, currentStyle, product, hasErrors }) => {
  if (loading) return <p>Loading product...</p>;
  if (hasErrors) return <p>Unable to display product.</p>;

  // const [currentPhoto, setCurrentPhoto] = useState(currentStyle.photos[0]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const [thumbEndIndex, setThumbEndIndex] = useState(0);

  const renderThumbnails = () =>
    currentStyle.photos.map((urls, i) => (
      <button
        type="button"
        onClick={() => setCurrentPhotoIndex(i)}
        key={urls.url}
      >
        <img
          src={
            urls.thumbnail_url ||
            'https://edtmlv.pbworks.com/f/1450761659/media-6466-w700-q100%5B1%5D.jpg'
          }
          alt={`Product Thumbnail${i}`}
        />
      </button>
    ));

  const renderDots = () =>
    currentStyle.photos.map((urls, i) => (
      <li
        className={i === currentPhotoIndex ? 'active' : ''}
        key={`bullet_${i}`}
        onClick={() => setCurrentPhotoIndex(i)}
      />
    ));

  const handleTouchStart = (e) => {
    setClientX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setDeltaX(e.changedTouches[0].clientX - clientX);
    setLeftPosition(deltaX);
  };

  const handleTouchEnd = () => {
    const { photos } = currentStyle;
    if (deltaX < -100) {
      if (currentPhotoIndex < photos.length - 1) {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
      }
    }
    if (deltaX > 100) {
      if (currentPhotoIndex > 0) {
        setCurrentPhotoIndex(currentPhotoIndex - 1);
      }
    }
    renderDots();
    setLeftPosition(0);
  };

  return (
    <div className="product-media">
      <div className="product-image-thumbnails">{renderThumbnails()}</div>
      <div className="product-image">
        <img
          src={
            currentStyle.photos[currentPhotoIndex].url ||
            'https://edtmlv.pbworks.com/f/1450761659/media-6466-w700-q100%5B1%5D.jpg'
          }
          alt={product.name}
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
          style={{ left: leftPosition }}
        />
      </div>
      <ol className="product-image-mobile">{renderDots()}</ol>
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
  product: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number])
  ).isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  dispatch: PropTypes.func.isRequired,
  loading: state.styles.loading,
  currentStyle: state.styles.currentStyle,
  product: state.product.product,
  hasErrors: state.styles.hasErrors,
});

export default connect(mapStateToProps)(Images);
