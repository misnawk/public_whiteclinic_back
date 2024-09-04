import { CustomerTimeMappingProps, workTimeLine } from '@/constants/definition';
import CScheduleTimeSlot from './CScheduleTimeSlot';
import { Box, Typography } from '@mui/material';

//사용자의 예약 시간과 예약 날짜 정보를 timeslot의 시간대와 기사의 날짜에 대입하여 mapping
//데이터 확정되면 enginnerInfo 타입을 추가해서 해당 타입과 customer 정보를 비교해서 집어넣는 것으로 수정할 예정
const CScheduleTimeMapping = ({ selectDate, orderInfo }: CustomerTimeMappingProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {workTimeLine && workTimeLine.length > 0 ? (
        workTimeLine.map((timeSlot, index) => {
          const customer = orderInfo?.find(
            (order) =>
              order.appointmentTime === timeSlot.label && order.appointmentDate === selectDate
          );

          return (
            <CScheduleTimeSlot
              key={index}
              timeSlot={timeSlot.label || 'default time'}
              customer={customer}
            />
          );
        })
      ) : (
        <Typography variant="body1" sx={{ color: '#ffffff' }}>
          정보 없음.
        </Typography>
      )}
    </Box>
  );
};

export default CScheduleTimeMapping;
