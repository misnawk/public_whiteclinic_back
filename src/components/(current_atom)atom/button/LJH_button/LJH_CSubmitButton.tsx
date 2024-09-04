import { Button } from '@mui/material';

type submitBtnTexts = '등록' | '추가등록' | '급여사항확인';
type btnType = 'button' | 'reset' | 'submit';

type SubmitBtnProps = {
  handleSubmit?: () => void;
  btnText?: submitBtnTexts;
  btnType?: btnType;
};

const SubmitButton = ({ handleSubmit, btnText = '등록', btnType = 'submit' }: SubmitBtnProps) => {
  return (
    <Button type={btnType} sx={{ width: '200px' }} variant="contained" onClick={handleSubmit}>
      {btnText}
    </Button>
  );
};

export default SubmitButton;
