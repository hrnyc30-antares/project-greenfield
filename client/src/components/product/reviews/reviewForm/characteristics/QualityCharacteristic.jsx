import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

const QualityCharacteristic = ({change}) => {

  const [quality, setQuality] = useState("");

  const handleChange = (e) => {
    setQuality(e.target.value);
    change(4, e.target.value); // 4 represents the unique product char ID

  }

  return (
    <>
    <FormLabel>Quality</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={handleChange} value={quality}>
        <FormControlLabel
          value="1"
          control={<Radio color="primary"  />}
          label="Poor"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="2"
          control={<Radio color="primary" />}
          label="Below average"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="What I expected"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="4"
          control={<Radio color="primary" />}
          label="Pretty great"
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

export default QualityCharacteristic;