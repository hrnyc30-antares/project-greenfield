import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@material-ui/icons';

import { addToCart } from '../../../../redux/actions/cartActions';
import { updateCurrentStyle } from '../../../../redux/actions/stylesActions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Styles = ({
  dispatch,
  loading,
  styles,
  currentStyle,
  hasErrors,
  cartLoading,
}) => {
  if (loading) return <p>Loading styles...</p>;
  if (hasErrors) return <p>Unable to display styles.</p>;

  const classes = useStyles();
  const [currentSize, setCurrentSize] = useState('');
  const [currentQty, setCurrentQty] = useState('');
  const [sizeOpen, setSizeOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);

  const userToken = 69601;

  const renderQty = (size) => {
    const quantities = currentStyle.skus[size];
    return [...Array(quantities).keys()].map((qty) => (
      <MenuItem value={qty} key={`qty_${qty}`}>
        {qty}
      </MenuItem>
    ));
  };

  const renderSizes = () =>
    Object.keys(currentStyle.skus).map((size) => (
      <MenuItem value={size} key={`size_${size}`}>
        {size}
      </MenuItem>
    ));

  const handleSizeChange = (e) => {
    setCurrentSize(e.target.value);
    setCurrentQty('');
  };

  const handleQtyChange = (e) => {
    setCurrentQty(e.target.value);
  };

  const handleSizeClose = () => {
    setSizeOpen(false);
  };

  const handleSizeOpen = () => {
    setSizeOpen(true);
  };

  const handleQtyClose = () => {
    setQtyOpen(false);
  };

  const validateSelects = () => {
    if (currentSize === '') {
      setSizeOpen(true);
      return false;
    }
    if (currentQty === '') {
      setQtyOpen(true);
      return false;
    }

    return true;
  };

  const handleQtyOpen = () => {
    if (validateSelects()) {
      setQtyOpen(true);
    }
  };

  const handleAddClick = () => {
    if (validateSelects()) {
      dispatch(addToCart(userToken, currentStyle.style_id));
    }
  };

  const handlSwatchClick = (style) => {
    dispatch(updateCurrentStyle(style));
  };

  const stylesList = () =>
    styles.map((style) => (
      <Grid item xs={3} key={`style_${style.style_id}`}>
        <button type="button" onClick={() => handlSwatchClick(style)}>
          <img
            src={style.photos[0].thumbnail_url}
            alt={`${style.name} swatch`}
          />
        </button>
      </Grid>
    ));

  return (
    <div className="product-addForm">
      <div className="product-info-price">
        {currentStyle.sale_price === '0' ? (
          <div className="price-regular">${currentStyle.original_price}</div>
        ) : (
          <>
            <div className="price-original">${currentStyle.original_price}</div>
            <span className="price-sale">${currentStyle.sale_price}</span>
          </>
        )}
      </div>
      <div className="product-swatch-style">
        <Grid container spacing={1}>
          {stylesList()}
        </Grid>
      </div>
      <div className="product-dropdowns">
        <Grid container spaceing={1}>
          <Grid className="product-size" item xs={8}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="size-select">Select Size</InputLabel>
              <Select
                onChange={handleSizeChange}
                value={currentSize}
                onClose={handleSizeClose}
                onOpen={handleSizeOpen}
                open={sizeOpen}
                inputProps={{
                  name: 'size',
                  id: 'size-select',
                }}
              >
                {renderSizes()}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Grid>
          <Grid className="product-qty" item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="qty-select">Qty</InputLabel>
              <Select
                onChange={handleQtyChange}
                value={currentQty}
                onClose={handleQtyClose}
                onOpen={handleQtyOpen}
                open={qtyOpen}
                inputProps={{
                  name: 'qty',
                  id: 'qty-select',
                }}
              >
                {renderQty(currentSize)}
              </Select>
              <FormHelperText>Required</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div className="product-options-button">
        <Grid container spaceing={1}>
          <Grid className="product-add" item xs={8}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<Add />}
              disabled={cartLoading}
              onClick={handleAddClick}
            >
              Add to Bag
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Styles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  styles: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentStyle: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.number,
      PropTypes.string,
      PropTypes.object,
    ])
  ).isRequired,
  hasErrors: PropTypes.bool.isRequired,
  cartLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.styles.loading,
  styles: state.styles.styles,
  currentStyle: state.styles.currentStyle,
  hasErrors: state.styles.hasErrors,
  cart: state.cart.cart,
  cartLoading: state.cart.loading,
});

export default connect(mapStateToProps)(Styles);
