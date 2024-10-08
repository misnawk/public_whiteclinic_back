import CDatePicker from '@/components/atom/CDatePicker';
import CScheduleDateBox from '../molecules/LJW/CScheduleDateBox';
import { useEffect, useState } from 'react';
import CScheduleTimeLineList from '../molecules/LJW/CScheduleTimeLineList';
import { Dayjs } from 'dayjs';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { theme } from '@/constants/theme';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';
import { StyledScheduleTable } from '@/styles/customize';

const CScheduleTable = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(TODAY);
  const [engineers, setEngineers] = useState<engineerInfo[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo[]>([]);
  const [loading, setLoading] = useState(true);

  // 확인위해 useEffect사용하여 더미 데이터 생성 - nextjs로 데이터 받아오는 형식으로 바꿔야함
  useEffect(() => {
    const fetchData = async () => {
      // 엔지니어 더미 데이터
      const dummyEngineers: engineerInfo[] = [
        {
          engineerName: '박영식',
          engineerContact: '010-1234-5678',
          engineerAddress: '서울시 강남구',
          engineerAbleItem: '에어컨, 보일러',
          engineerSignificant: '경력 10년',
          engineerClosedDay: '토요일',
          engineerClosedDate: '',
          engineerSalary: 3000,
          engineerWorkDay: '월, 화, 수, 목, 금',
        },
        {
          engineerName: '김철수',
          engineerContact: '010-9876-5432',
          engineerAddress: '서울시 마포구',
          engineerAbleItem: '세탁기, 냉장고',
          engineerSignificant: '경력 8년',
          engineerClosedDay: '일요일',
          engineerClosedDate: '',
          engineerSalary: 2800,
          engineerWorkDay: '월, 화, 수, 목, 금, 토',
        },
      ];

      // 고객 더미 데이터 (엔지니어에 매핑됨)
      const dummyCustomerInfo: CustomerInfo[] = [
        {
          customerName: '이영희',
          customerContact: '010-5678-1234',
          customerAddress: '서울시 송파구',
          cleaningItem: '에어컨',
          cleaningType: '청소',
          itemQuantity: 1,
          totalPrice: 100000,
          appointmentDate: '2024-09-10',
          appointmentTime: '10시 ~ 11시',
          assignedEngineer: '박영식',
        },
        {
          customerName: '홍길동',
          customerContact: '010-4321-8765',
          customerAddress: '서울시 강북구',
          cleaningItem: '세탁기',
          cleaningType: '수리',
          itemQuantity: 1,
          totalPrice: 150000,
          appointmentDate: '2024-09-10',
          appointmentTime: '14시 ~ 15시',
          assignedEngineer: '김철수',
        },
        {
          customerName: '강민수',
          customerContact: '010-2222-3333',
          customerAddress: '서울시 은평구',
          cleaningItem: '냉장고',
          cleaningType: '점검',
          itemQuantity: 1,
          totalPrice: 80000,
          appointmentDate: '2024-09-11',
          appointmentTime: '9시 ~ 10시',
          assignedEngineer: '김철수',
        },
      ];

      try {
        setLoading(true);
        setEngineers(dummyEngineers);
        setCustomerInfo(dummyCustomerInfo);
      } catch (error) {
        console.log('데이터 오류:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ ...StyledScheduleTable }}>
        <CDatePicker value={selectedDate} handleChange={handleSelect} />

        <div>
          <CScheduleDateBox dateInfo={selectedDate} />
          {loading ? (
            <div>loading...</div>
          ) : engineers.length > 0 ? (
            <CScheduleTimeLineList
              selectDate={selectedDate}
              engineers={engineers}
              orderInfo={customerInfo}
            />
          ) : (
            <Typography variant="h4" component="div">
              데이터 없음
            </Typography>
          )}
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default CScheduleTable;
