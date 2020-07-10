import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Fullscreen,
  NavigateBefore,
  NavigateNext,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

const Images = ({ dispatch, loading, currentStyle, product, hasErrors }) => {
  if (loading) return <p>Loading product...</p>;
  if (hasErrors) return <p>Unable to display product.</p>;

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [leftPosition, setLeftPosition] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [deltaX, setDeltaX] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [thumbStartIndex, setThumbStartIndex] = useState(0);
  const [thumbEndIndex, setThumbEndIndex] = useState(
    currentStyle.photos.length > 7 ? 7 : currentStyle.photos.length
  );

  const renderThumbnails = () => {
    let i;
    const thumbsArray = [],
      urls = currentStyle.photos;
    for (i = 0; i < thumbEndIndex; i++) {
      thumbsArray.push(
        <button
          type="button"
          className="product-thumbnail"
          onClick={() => setCurrentPhotoIndex(i)}
          key={urls[i].url}
        >
          <img
            className={i === currentPhotoIndex ? 'selected' : ''}
            src={
              urls[i].thumbnail_url ||
              'https://edtmlv.pbworks.com/f/1450761659/media-6466-w700-q100%5B1%5D.jpg'
            }
            alt={`Product Thumbnail${i}`}
          />
        </button>
      );
    }

    return thumbsArray;
  };

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

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleZoomed = () => {
    setZoomed(!zoomed);
  };

  const handleImageClick = () => {
    if (expanded) {
      toggleZoomed();
    }
    setExpanded(true);
  };

  return (
    <div
      className={`product-media ${expanded ? 'expanded' : ''} ${
        zoomed ? 'zoomed' : ''
      }`}
    >
      {thumbStartIndex > 0 && <ExpandLess className="thumb-up-arrow" />}
      <div className="product-image-thumbnails">{renderThumbnails()}</div>
      {thumbEndIndex < currentStyle.photos.length - 2 && (
        <ExpandMore className="thumb-down-arrow" />
      )}
      {currentPhotoIndex > 0 && (
        <NavigateBefore
          className="product-image-before"
          fontSize="large"
          color="primary"
          onClick={() => setCurrentPhotoIndex(currentPhotoIndex - 1)}
        />
      )}
      <button
        type="button"
        className="product-image"
        onClick={handleImageClick}
      >
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
      </button>
      {currentStyle.photos.length > 1 &&
        currentPhotoIndex - 1 < currentStyle.photos.length && (
          <NavigateNext
            className="product-image-next"
            fontSize="large"
            color="primary"
            onClick={() => setCurrentPhotoIndex(currentPhotoIndex + 1)}
          />
        )}
      <Fullscreen
        color="primary"
        className="product-image-zoom"
        onClick={toggleExpanded}
      />
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
