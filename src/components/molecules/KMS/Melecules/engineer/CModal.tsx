import { Box, Modal, Typography } from '@mui/material';
import { ButtonTwo, ButtonTwoModalProps } from './ButtonTwo';

type ModalTitle =
  | '해당 내용으로 기사정보를 등록하시겠습니까?'
  | '해당 내용으로 급여사항을 등록하겠습니까?';

type modalProps = {
  open: boolean;
  title: ModalTitle;
  children: JSX.Element;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 415,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  gap: 10,
};

export const CModal = ({ open = false, title, children }: modalProps) => {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography>{children}</Typography>
      </Box>
    </Modal>
  );
};
