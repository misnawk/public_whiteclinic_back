import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type WashtypeCheckboxProps = {
  washtypeLabel?: '종합세척' | '일반세척';
};

const WashtypeCheckbox = ({ washtypeLabel = '일반세척' }: WashtypeCheckboxProps) => {
  return (
    <FormControl>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label={washtypeLabel}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};

export default WashtypeCheckbox;
