import CButton from '@/components/atom/CButton';
import { StyledButtonContainer } from '@/styles/customize';
import { Stack } from '@mui/material';

/**
 *
 * @returns 주문정보 입력페이지 버튼 컴포넌트
 */
const OrderInfoButtons = () => {
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

export default OrderInfoButtons;
