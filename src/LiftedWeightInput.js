import React from 'react';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

const  LifteWeightInput = (liftedweight, handleLiftedweightChange) => (
    <FormControl >
      <InputLabel htmlFor="weight">Lifted Weight</InputLabel>
      <Input
        type='number'
        id="weight"
        value={liftedweight}
        onChange={handleLiftedweightChange}
        endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
      />
    </FormControl>
)
export default LifteWeightInput