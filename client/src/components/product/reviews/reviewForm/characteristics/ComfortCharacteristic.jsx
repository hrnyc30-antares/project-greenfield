import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const ComfortCharacteristic = ({change}) => {

  const [comfort, setComfort] = useState("");

  const handleChange = (e) => {
    setComfort(e.target.value);
    change(3, e.target.value); // 3 represents the unique product char ID

  }
  
  return (
    <>
    <FormLabel>Comfort</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={comfort}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="Uncomfortable"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Slightly uncomfortable"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="Ok"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="Comfortable"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="5"
          control={<Radio color="primary" />}
          label="Perfect"
          labelPlacement="bottom"
        />
    </RadioGroup>
    </>
  )
}

export default ComfortCharacteristic;