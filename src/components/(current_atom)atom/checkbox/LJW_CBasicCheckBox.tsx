import { Checkbox } from '@mui/material';
import { ChangeEvent } from 'react';

export type LJW_CBasicCheckBoxProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void; //이벤트
  color?: string; //색상
  fontSize?: string; //사이즈
};

//체크박스 컴포넌트
const LJW_CBasicCheckBox = ({ color, fontSize, handleChange }: LJW_CBasicCheckBoxProps) => {
  return <Checkbox sx={{ color, fontSize }} onChange={handleChange} />;
};

export default LJW_CBasicCheckBox;
