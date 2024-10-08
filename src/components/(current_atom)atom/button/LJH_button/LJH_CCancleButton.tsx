import { Button, Typography } from '@mui/material';
import Link from 'next/link';

type cancleBtnTexts = '취소' | '등록중지' | '아니오';
type btnType = 'button' | 'reset' | 'submit';

type cancleBtnProps = {
  handleCancle?: () => void;
  btnText?: cancleBtnTexts;
  btnType?: btnType;
};

const CancleButton = ({ handleCancle, btnText = '취소', btnType = 'button' }: cancleBtnProps) => {
  return (
    <Button type={btnType} sx={{ width: '180px' }} variant="contained" onClick={handleCancle}>
      <Typography letterSpacing={5}>{btnText}</Typography>
    </Button>
  );
};

export default CancleButton;
