import CButton from '@/components/atom/CButton';
import { ButtonTwoModalProps } from '@/constants/definition';
import { ButtonGroup } from '@mui/material';

export const ButtonTwo = ({
  leftButton,
  rightButton,
  leftColor,
  rightColor,
  leftBgColor,
  rightBgBolor,
  onLeftButton,
  onRightButton,
}: ButtonTwoModalProps) => {
  return (
    <ButtonGroup>
      <CButton
        content={leftButton}
        color={leftColor}
        bgColor={leftBgColor}
        handleClick={onLeftButton}
        //넓이
      />
      <CButton
        content={rightButton}
        color={rightColor}
        bgColor={rightBgBolor}
        handleClick={onRightButton}
      />
    </ButtonGroup>
  );
};
