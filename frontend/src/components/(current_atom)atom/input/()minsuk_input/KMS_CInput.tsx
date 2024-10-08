import { inputStyle } from '@/styles/sizes';
import { FaPencil } from 'react-icons/fa6';
import { FormControl, IconButton, TextField } from '@mui/material';

type inputType = 'text' | 'number';
type infoLabelType = '고객성함' | '고객연락처' | '고객주소지';
type infoPholderType = '이름을입력하세요' | ' `-`을 제외하고입력하세요 ';

type KMS_CInfoInputProps = {
  inputType: inputType;
  infoLabelType?: infoLabelType;
  infoPholderType?: infoPholderType;
  isReadonly?: boolean;
  ismodifiable?: boolean;
  clickModify?: () => void;
};

const KMS_CInfoInput = ({
  inputType,
  infoLabelType,
  infoPholderType,
  isReadonly,
  ismodifiable,
  clickModify,
}: KMS_CInfoInputProps) => {
  return (
    <FormControl>
      <TextField
        type={inputType}
        label={infoLabelType}
        placeholder={infoPholderType}
        InputProps={{
          readOnly: isReadonly,
          endAdornment: ismodifiable ? (
            <IconButton>
              <FaPencil color="silver" size={18} />
            </IconButton>
          ) : null,
        }}
      />
    </FormControl>
  );
};
export default KMS_CInfoInput;
