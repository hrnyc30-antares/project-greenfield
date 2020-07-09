import React, { useState } from 'react';
import { Modal, TextField, Box, Radio, RadioGroup, FormControlLabel, FormLabel, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import SizeCharacteristic from './characteristics/SizeCharacteristic';
import WidthCharacteristic from './characteristics/WidthCharacteristic';
import ComfortCharacteristic from './characteristics/ComfortCharacteristic';
import QualityCharacteristic from './characteristics/QualityCharacteristic';
import LengthCharacteristic from './characteristics/LengthCharacteristic';
import FitCharacteristic from './characteristics/FitCharacteristic';

const AddReviewsForm = ({meta}) => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  const labels = {
    1: 'Poor',
    2: 'Fair',
    3: 'Average',
    4: 'Good',
    5: 'Great',
  };

  const [characteristics, setCharacteristics] = useState({
    "1": "5",
    "2": "5",
    "3": "5",
    "4": "5",
    "5": "5",
    "6": "5",

  });

  const handleStateChange = (v, target) => {
    setCharacteristics({
      ...characteristics,
      [v]: target,
    });
  };

  return (
    <form>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="hover-feedback"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);}}

          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </Box>

      <FormLabel>Do you recommend this product?</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
          labelPlacement="bottom"
        />
      </RadioGroup>

      <br />
      <br />
      <SizeCharacteristic change={handleStateChange} />
      <br />
      <WidthCharacteristic change={handleStateChange} />
      <br />
      <ComfortCharacteristic change={handleStateChange} />
      <br />
      <QualityCharacteristic change={handleStateChange} />
      <br />
      <LengthCharacteristic change={handleStateChange} />
      <br />
      <FitCharacteristic change={handleStateChange} />
      <br />
      <TextField
        className="standard-full-width"
        label="Review Summary"
        style={{ margin: 8, marginTop: 25 }}
        placeholder="Summary"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 60 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <br />
      <TextField
        className="standard-full-width"
        label="Review Body"
        style={{ margin: 8, marginTop: 25 }}
        placeholder="Review"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 1000, minLength: 50 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <br />
      <TextField
        name="upload-photo"
        type="file"
        style={{ margin: 8, marginTop: 25 }}
        label="Upload Images"
      />

      <br />
      <TextField
        className="standard-full-width"
        label="Nickname"
        style={{ margin: 8, marginTop: 25 }}
        placeholder="Nickname"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 60 }}
        InputLabelProps={{
          shrink: true,
        }}
        helperText="For privacy reasons, do not use your full name or email address"
      />

      <TextField
        className="standard-full-width"
        label="Email"
        style={{ margin: 8, marginTop: 25 }}
        placeholder="Email"
        fullWidth
        margin="normal"
        inputProps={{ maxLength: 60 }}
        InputLabelProps={{
          shrink: true,
        }}
        helperText="For authentication reasons, you will not be emailed"
      />

      <Button variant="contained" size="large">Submit</Button>
    </form>
  );
};


const mapStateToProps = (state) => ({
  meta: state.ratings.meta,
})

export default connect(mapStateToProps)(AddReviewsForm);

/*
This is an example of product 4 Meta:

 "characteristics": {
1   "Fit": {
       "id": 10,
       "value": "3.6667"
   },
   "Length": {
       "id": 11,
       "value": "3.6667"
   },
   "Comfort": {
       "id": 12,
       "value": "3.6667"
   },
   "Quality": {
       "id": 13,
       "value": "3.6667"
   }
 }
 }


 Example of POST request body:

 {
   "rating": "3",
   "summary": "This is test",
   "body": "this is test body",
   "recommend": true,
   "name": "Ram",
   "email": "hello@hello.com",
   "characteristics": {"3":5, "2":5, "5":5}
 }
 */
