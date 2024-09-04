import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type EnginnerLabelType = {
  EngineerName?: string;
  handleClick?: () => void;
};

const CEngineerCheckbox = ({ EngineerName = '기사이름', handleClick }: EnginnerLabelType) => {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox onClick={handleClick} />}
          label={EngineerName}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CEngineerCheckbox;
