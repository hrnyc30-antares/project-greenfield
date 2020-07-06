import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Styles = ({ dispatch, loading, styles, currentStyle, hasErrors }) => {
  if (loading) return <p>Loading styles...</p>;
  if (hasErrors) return <p>Unable to display styles.</p>;

  const classes = useStyles();

  const renderSizes = () =>
    Object.keys(currentStyle.skus).map((size) => (
      <MenuItem value={size} key={`size_${size}`}>
        {size}
      </MenuItem>
    ));

  const handleSizeChange = () => {};

  const renderQty = () => {
    // TODO: update qty
    return [...Array(10).keys()].map((qty) => (
      <MenuItem value={qty} key={`qty_${qty}`}>
        {qty}
      </MenuItem>
    ));
  };

  const handleQtyChange = () => {};

  const stylesList = () =>
    styles.map((style) => (
      <Grid item xs={3}>
        <div key={`style_${style.style_id}`} data-style-id={style.style_id}>
          <img
            src={style.photos[0].thumbnail_url}
            alt={`${style.name} swatch`}
          />
        </div>
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
                inputProps={{
                  name: 'size',
                  id: 'size-select',
                }}
              >
                {renderSizes()}
              </Select>
            </FormControl>
          </Grid>
          <Grid className="product-qty" item xs={4}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="qty-select">Qty</InputLabel>
              <Select
                onChange={handleQtyChange}
                inputProps={{
                  name: 'qty',
                  id: 'qty-select',
                }}
              >
                {renderQty()}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
      <div className="product-options-button">
        <Button variant="contained" color="primary">
          Add to Bag
        </Button>
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
};

const mapStateToProps = (state) => ({
  loading: state.styles.loading,
  styles: state.styles.styles,
  currentStyle: state.styles.currentStyle,
  hasErrors: state.styles.hasErrors,
});

export default connect(mapStateToProps)(Styles);
