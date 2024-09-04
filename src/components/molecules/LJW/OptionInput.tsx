import InputComponent from '@/components/atom/CInput';
import { InputProps } from '@/constants/definition';
import { Typography } from '@mui/material';

//옵션이름+input으로 이루어진 컴포넌트

//에약일시, 고객성함 등 옵션이름 atom을 하나 만들어야할 것 같음

type OptionInputProps = {
  optionTitle: string;
  inputprops: InputProps;
};
const OptionInput = ({ optionTitle, inputprops }: OptionInputProps) => {
  return (
    <div className="flex p-1 ">
      <Typography variant="subtitle2">{optionTitle}</Typography>
      <InputComponent {...inputprops} />
    </div>
  );
};

export default OptionInput;
