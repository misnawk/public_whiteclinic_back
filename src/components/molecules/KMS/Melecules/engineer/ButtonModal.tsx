import CButton from '@/components/atom/CButton';
import { Box, ButtonGroup } from '@mui/material';
import { ButtonTwoModalProps } from './ButtonTwo';

export type ButtoModalTextType =
  | '해당 내용으로 기사정보를 등록하시겠습니까?'
  | '해당 내용으로 급여사항을 등록하겠습니까?';

export const ButtonModal = ({
  leftButton,
  rightButton,
  leftColor,
  rightColor,
  leftBgColor,
  rightBgBolor,
  onLeftButton,
  onRightButton,
  modalText,
}: ButtonTwoModalProps) => {
  return (
    <Box>
      <p>{modalText}</p>
      <ButtonGroup>
        <CButton
          content={leftButton} //
          color={leftColor}
          bgColor={leftBgColor}
          handleClick={onLeftButton}
        />
        <CButton
          content={rightButton} //
          color={rightColor}
          bgColor={rightBgBolor}
          handleClick={onRightButton}
        />
      </ButtonGroup>
    </Box>
  );
};
