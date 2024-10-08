import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type WageStateCheckboxProps = {
  wageStateLabel?: '지급여부';
};

const WageStateCheckbox = ({ wageStateLabel = '지급여부' }: WageStateCheckboxProps) => {
  return (
    <FormControl>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label={wageStateLabel}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};

export default WageStateCheckbox;
