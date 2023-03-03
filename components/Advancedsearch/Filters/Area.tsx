import React, { useState } from 'react';
import CropLandscapeSharpIcon from '@mui/icons-material/CropLandscapeSharp';
import Chip from '@mui/material/Chip';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';


function AreaComponent() {
  const [values, setValues] = useState([30, 70]);

  const handleChange = (event:any, newValues:any) => {
    setValues(newValues);
  };

  return (
    <div style={{ width: 300 }}>
    <Chip icon={<CropLandscapeSharpIcon color="success" />} label="Area(sq. feet)" color='success' variant="outlined" />
      <Slider
        value={values}
        onChange={handleChange}
        aria-labelledby="range-slider"
        min={0}
        max={100}
      />
      <TextField
        label="Lower Value"
        value={values[0]}
        onChange={(event) => {
          setValues([+event.target.value, values[1]]);
        }}
        style={{ margin: 16 }}
        type="number"
        inputProps={{
          min: 0,
          max: values[1] - 1,
          step: 1,
        }}
      />
      <TextField
        label="Higher Value"
        value={values[1]}
        onChange={(event) => {
          setValues([values[0], +event.target.value]);
        }}
        style={{ margin: 16 }}
        type="number"
        inputProps={{
          min: values[0] + 1,
          max: 100,
          step: 1,
        }}
      />
    </div>
  );
}

export default AreaComponent;
