import { FormControl, TextField } from '@mui/material';

type inputType = 'text' | 'number';
type infoLabelType = '고객 성함' | '고객 연락처' | '고객 주소지';
type infoPholderType =
  | '이름을 입력하세요'
  | '`-` 를 제외하고 입력하세요'
  | '상세 주소를 입력하세요';

export type infoInputProps = {
  inputType?: inputType;
  infoLabelType?: infoLabelType;
  infoPholderType?: infoPholderType;
  handleInput?: () => void;
};

const InfoInput = ({
  inputType = 'text',
  infoLabelType = '고객 성함',
  infoPholderType = '이름을 입력하세요',
  handleInput,
}: infoInputProps) => {
  return (
    <FormControl>
      <TextField
        onChange={handleInput}
        type={inputType}
        label={infoLabelType}
        placeholder={infoPholderType}
      />
    </FormControl>
  );
};

export default InfoInput;
