import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import BathroomSharpIcon from '@mui/icons-material/BathroomSharp';


function Bath(props: any) {
  let checked = props.options ;

  return (
    <>
    <Chip icon={<BathroomSharpIcon color="success" />} label="Bathroom" color='success' variant="outlined"  />
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option1}
                onChange={props.handleChange}
                name="option1"
              />
            }
            label="1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option2}
                onChange={props.handleChange}
                name="option2"
              />
            }
            label="2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option3}
                onChange={props.handleChange}
                name="option3"
              />
            }
            label="3"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option4}
                onChange={props.handleChange}
                name="option4"
              />
            }
            label="4"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option5}
                onChange={props.handleChange}
                name="option5"
              />
            }
            label="4+"
          />
        </FormGroup>
      </Grid>
    </Grid>
    </>
  );
}

export default Bath;
