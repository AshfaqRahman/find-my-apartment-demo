import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';
import CompassCalibrationSharpIcon from '@mui/icons-material/CompassCalibrationSharp';


function CheckboxComponent() {
  const [checkedState, setCheckedState] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
  });

  const handleChange = (event:any) => {
    setCheckedState({ ...checkedState, [event.target.name]: event.target.checked });
  };

  return (
    <>
    <Chip icon={<CompassCalibrationSharpIcon color="success" />} label="Facilities" color='success' variant="outlined"  />


    <div>
      <FormControlLabel
        control={<Checkbox checked={checkedState.option1} onChange={handleChange} name="option1" />}
        label="Option 1"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedState.option2} onChange={handleChange} name="option2" />}
        label="Option 2"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedState.option3} onChange={handleChange} name="option3" />}
        label="Option 3"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedState.option4} onChange={handleChange} name="option4" />}
        label="Option 4"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedState.option5} onChange={handleChange} name="option5" />}
        label="Option 5"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedState.option6} onChange={handleChange} name="option6" />}
        label="Option 6"
      />
    </div>
    </>
  );
}

export default CheckboxComponent;
