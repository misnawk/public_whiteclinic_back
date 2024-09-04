import { Checkbox, FormControl, FormControlLabel, FormGroup } from '@mui/material';

type skillLabelType =
  | '벽걸이'
  | '원웨이'
  | '포웨이'
  | '원형'
  | '스탠드'
  | '실외기'
  | '덕트'
  | '창문형'
  | '통돌이'
  | '드럼'
  | '빌트인'
  | '건조기';

type skillLabelProps = {
  skills?: skillLabelType;
};

const SkillCheckBox = ({ skills = '건조기' }: skillLabelProps) => {
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel value="end" control={<Checkbox />} label={skills} labelPlacement="end" />
      </FormGroup>
    </FormControl>
  );
};

export default SkillCheckBox;
