import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const SizeCharacteristic = ({change}) => {

  const [size, setSize] = useState("");

  const handleChange = (e) => {
    setSize(e.target.value);
    change(1, e.target.value);

  }

  return (
    <>
    <FormLabel>Size</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={size}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="A size too small"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="½ a size too small"
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
          label="½ a size too big"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label="A size too wide"
          labelPlacement="bottom"
        />
    </RadioGroup>
    </>
  )
}

export default SizeCharacteristic;