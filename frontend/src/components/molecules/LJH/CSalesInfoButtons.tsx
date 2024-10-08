import CButton from '@/components/atom/CButton';
import { StyledButtonContainer } from '@/styles/customize';
import { Stack } from '@mui/material';

const SalesInfoButtons = () => {
  const handleCancle = () => {
    console.log('cancle button clicked');
  };

  const handleSubmit = () => {
    console.log('submit button clicked');
  };

  return (
    <Stack sx={{ ...StyledButtonContainer }}>
      {<CButton content="취소" handleClick={handleCancle} type="button" />}
      {<CButton content="등록" handleClick={handleSubmit} type="submit" />}
    </Stack>
  );
};

export default SalesInfoButtons;
