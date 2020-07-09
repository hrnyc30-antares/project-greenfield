import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const LengthCharacteristic = ({change}) => {

  const [length, setLength] = useState("");

  const handleChange = (e) => {
    setLength(e.target.value);
    change(5, e.target.value); // 5 represents the unique product char ID

  }

  return (
    <>
    <FormLabel>Length</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={length}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="Runs Short"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Runs slightly short"
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

export default LengthCharacteristic;