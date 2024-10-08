import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type DiscountCheckboxProps = {
  discountLabel?: '할인적용';
};

const DiscountCheckbox = ({ discountLabel = '할인적용' }: DiscountCheckboxProps) => {
  return (
    <FormControl>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label={discountLabel}
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
};

export default DiscountCheckbox;
