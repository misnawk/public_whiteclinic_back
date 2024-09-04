import { sizes } from '@/styles/sizes';
import { Button } from '@mui/material';

type ButtonContent = '취소' | '등록' | '등록중지' | '추가등록' | '아니오' | '급여사항확인';
type btnType = 'button' | 'submit' | 'reset';
type fontSizeProps = keyof typeof sizes.fontSize;
type fontWeightProps = keyof typeof sizes.fontWeight;

type LJW_CButtonProps = {
  content: ButtonContent;
  fontSize?: fontSizeProps;
  fontWeight?: fontWeightProps;
  color?: string;
  type?: btnType;
  onClick?: () => void;
};

const LJW_CButton = ({
  content,
  fontSize = 'medium',
  fontWeight = 'bold',
  color,
  type = 'button',
  onClick,
}: LJW_CButtonProps) => {
  return (
    <Button
      sx={{ width: '200px', height: '50px', fontSize, color, fontWeight }}
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {content}
    </Button>
  );
};
export default LJW_CButton;
