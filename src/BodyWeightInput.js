import React from 'react';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const  BodyWeightInput = (bodyweight, handleBodyweightChange) => (
    <FormControl >
    <InputLabel htmlFor="weight">Bodyweight</InputLabel>
    <Input
      type='number'
      id="weight"
      value={bodyweight}
      onChange={handleBodyweightChange}
      endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
    />
  </FormControl>
)
export default BodyWeightInput