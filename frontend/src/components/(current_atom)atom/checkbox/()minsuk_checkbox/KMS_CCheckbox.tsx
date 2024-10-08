import { Checkbox, FormControlLabel } from '@mui/material';
import { allType, engineerName } from './KMS_CCheckboxData';

export type KMS_CCheckboxboxProps<T extends allType | engineerName> = {
  label: T;
  isChecked?: boolean;
  handleChange?: () => void;
};

const KMS_CCheckbox = <T extends allType | engineerName>({
  label,
  handleChange,
  isChecked = true,
}: KMS_CCheckboxboxProps<T>) => {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked={isChecked} onChange={handleChange} />}
      label={label}
    />
  );
};

export default KMS_CCheckbox;
