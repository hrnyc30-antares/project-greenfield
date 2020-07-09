import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const FitCharacteristic = ({change}) => {

  const [fit, setFit] = useState("");

  const handleChange = (e) => {
    setFit(e.target.value);
    change(6, e.target.value); // 6 represents the unique product char ID

  }

  return (
    <>
    <FormLabel>Fit</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={fit}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="Runs tight"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Runs slightly tight"
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
          label="Runs slightly long"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label="Runs long"
          labelPlacement="bottom"
        />
    </RadioGroup>
    </>
  )
}

export default FitCharacteristic;