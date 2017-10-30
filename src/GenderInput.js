import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormControlLabel } from 'material-ui/Form';

const GenderInput = (gender, handleGenderChange) => (
    <RadioGroup
        aria-label="gender"
        name="gender1"
        value={gender}
        onChange={handleGenderChange}
    >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
    </RadioGroup>
)
export default GenderInput