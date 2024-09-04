import CButton from '@/components/atom/CButton';
import { ButtonContent } from '@/constants/definition';
import { ButtonGroup } from '@mui/material';
import { ButtoModalTextType } from './ButtonModal';

export type ButtonTwoModalProps = {
  leftButton: ButtonContent;
  rightButton: ButtonContent;
  leftColor?: string;
  rightColor?: string;
  leftBgColor?: string;
  rightBgBolor?: string;
  onLeftButton?: (event: any) => void;
  onRightButton?: (event: any) => void;
  modalText?: ButtoModalTextType;
};

export const ButtonTwo = ({
  leftButton, //
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
