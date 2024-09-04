import { theme } from '@/constants/theme';
import { Box, ThemeProvider } from '@mui/material';
import CEngineerTitle from './CEngineerTitle';
import { CustomerInfo } from '@/constants/definition';
import CScheduleTimeMapping from './CScheduleTimeMapping';
import { Dayjs } from 'dayjs';
import { StyledScheduleTimeline } from '@/styles/customize';

//기사 한 명의 timeLine 컴포넌트
export type CScheduleTimeLineProps = {
  engineerName: string;
  selectDate: string;
  orderInfo?: CustomerInfo[];
};
const CScheduleTimeLine = ({ engineerName, selectDate, orderInfo }: CScheduleTimeLineProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTimeline }}>
        <CEngineerTitle engineerName={engineerName} />
        <CScheduleTimeMapping selectDate={selectDate} orderInfo={orderInfo} />
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTimeLine;
