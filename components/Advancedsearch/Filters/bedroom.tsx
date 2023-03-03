import { Chip } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import KingBedSharpIcon from '@mui/icons-material/KingBedSharp';


export default function Bedroom(props: any) {
  let checked = props.options ;

  return (
    <>
    <Chip icon={<KingBedSharpIcon color="success" />} label="Bedroom" color='success' variant="outlined" />
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.option1}
              onChange={(e) => props.handleChange(e)}
                name="option1"
              />
            }
            label="1"
          />
          <FormControlLabel
            control={
              <Checkbox
              checked={checked.option2}
              onChange={(e) => props.handleChange(e)}
                name="option2"
              />
            }
            label="2"
          />
          <FormControlLabel
            control={
              <Checkbox
              checked={checked.option3}
              onChange={(e) => props.handleChange(e)}
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
              onChange={(e) => props.handleChange(e)}
                name="option4"
              />
            }
            label="4"
          />
          <FormControlLabel
            control={
              <Checkbox
              checked={checked.option5}
              onChange={(e) => props.handleChange(e)}
                name="option5"
              />
            }
            label="5"
          />
          <FormControlLabel
            control={
              <Checkbox
              checked={checked.option6}
              onChange={(e) => props.handleChange(e)}
                name="option6"
              />
            }
            label="5+"
          />
        </FormGroup>
      </Grid>
    </Grid>
    </>
  );
}

