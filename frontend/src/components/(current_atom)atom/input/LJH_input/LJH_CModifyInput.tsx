import { FormControl, IconButton, TextField } from '@mui/material';
import { infoInputProps } from './LJH_CInfoInput';
import { FaPencil } from 'react-icons/fa6';

type modifyInputProps = {
  infoInputProp?: infoInputProps;
  inputType?: 'number' | 'text';
  isReadOnly?: boolean;
  isModifiable?: boolean;
  inputText?: string;
  modify?: () => void;
};

const ModifyInput = ({
  infoInputProp,
  inputType,
  isReadOnly = true,
  inputText = '홍길동',
  isModifiable = true,
  modify = () => console.log('modify button clicked'),
}: modifyInputProps) => {
  return (
    <FormControl>
      <TextField
        label={infoInputProp?.infoLabelType}
        type={inputType}
        defaultValue={inputText}
        InputProps={{
          readOnly: isModifiable ? isReadOnly : false,
          endAdornment: isModifiable ? (
            <IconButton onClick={modify}>
              <FaPencil color="silver" size={18} />
            </IconButton>
          ) : null,
        }}
      />
    </FormControl>
  );
};

export default ModifyInput;
