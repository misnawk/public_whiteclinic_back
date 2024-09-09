import { CustomerTimeSlotProps } from '@/constants/definition';
import { Box } from '@mui/material';
import CScheduleTimeContent from './CScheduleTImeContent';
import CCustomerInfoContent from './CCustomerInfoContent';
import { StyledTimeSlot } from '@/styles/customize';

//시간대와 사용자의 정보가 같이 나오도록 위치 배치한 컴포넌트
const CScheduleTimeSlot = ({ timeSlot, customer }: CustomerTimeSlotProps) => {
  return (
    <Box sx={{ ...StyledTimeSlot }}>
      <CScheduleTimeContent content={timeSlot} />
      <CCustomerInfoContent customer={customer} />
    </Box>
  );
};

export default CScheduleTimeSlot;
