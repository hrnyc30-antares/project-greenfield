import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const WidthCharacteristic = ({change}) => {

  const [width, setWidth] = useState("");

  const handleChange = (e) => {
    setWidth(e.target.value);
    change(2, e.target.value);

  }

  return (
    <>
    <FormLabel>Width</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={width}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="Too narrow"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Slightly narrow"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="Perfect"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="Slightly wide"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label="Too wide"
          labelPlacement="bottom"
        />
    </RadioGroup>
    </>
  )
}

export default WidthCharacteristic;