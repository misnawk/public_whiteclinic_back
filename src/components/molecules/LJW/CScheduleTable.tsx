import CDatePicker from '@/components/atom/CDatePicker';
import CScheduleDateBox from './CScheduleDateBox';
import { useState } from 'react';
import CScheduleTimeLineList from './CScheduleTimeLineList';
import { Dayjs } from 'dayjs';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from '@/constants/theme';
import { engineerInfo, TODAY } from '@/constants/definition';
import { StyledScheduleTable } from '@/styles/customize';

//출력 확인용 임의 데이터
const engineers: engineerInfo[] = [
  {
    engineerName: '박영식',
    engineerContact: '',
    engineerAddress: '',
    engineerAbleItem: '',
    engineerSignificant: '',
    engineerClosedDay: '',
    engineerClosedDate: '',
    engineerSalary: 0,
    engineerWorkDay: '',
  },
  {
    engineerName: '김철수',
    engineerContact: '',
    engineerAddress: '',
    engineerAbleItem: '',
    engineerSignificant: '',
    engineerClosedDay: '',
    engineerClosedDate: '',
    engineerSalary: 0,
    engineerWorkDay: '',
  },
];

const CScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(TODAY);
  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTable }}>
        <CDatePicker value={selectedDate} handleChange={handleSelect} />
        <div>
          <CScheduleDateBox dateInfo={selectedDate} />
          <CScheduleTimeLineList selectDate={selectedDate} engineers={engineers} />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTable;
