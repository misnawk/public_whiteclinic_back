import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { ChangeEvent } from 'react';
import LJW_CBasicCheckBox, { LJW_CBasicCheckBoxProps } from './LJW_CBasicCheckBox';

type LJW_CCheckboxProps = {
  labelContent: string; //라벨 컨텐츠
  basiccheckprops: LJW_CBasicCheckBoxProps; //체크박스 컴포넌트 요소 받아오기
};

//컴포넌트 + 라벨 컴포넌트
const LJW_CCheckbox = ({ labelContent, basiccheckprops }: LJW_CCheckboxProps) => {
  return (
    <FormControlLabel control={<LJW_CBasicCheckBox {...basiccheckprops} />} label={labelContent} />
  );
};

export default LJW_CCheckbox;
