import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ko';
import { MonthCalendar } from '@mui/x-date-pickers';

type dateDropdownProps = {
  label: string;
  value: Dayjs | null;
  onChange: () => void;
};

const DateDropdown = ({ label = '일정 선택', value, onChange }: dateDropdownProps) => {
  dayjs.locale('ko');

  //TODO: 차후 constants로 옮기기
  // 현재 날짜 초기화
  const today = dayjs();
  const currentYear = today.year();
  const currentMonth = today.month() + 1; // dayjs에서 month()는 0-11을 반환
  const currentDay = today.date();

  // 1900년 1월 1일을 minDate로 설정
  const minDate = dayjs(`${currentYear}-${currentMonth}-${currentDay}`);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          views={['year', 'month', 'day']}
          slotProps={{
            textField: {
              placeholder: '연 / 월 / 일',
            },
          }}
          label={label}
          format="YYYY년 MM월 DD일"
          defaultValue={value}
          onChange={onChange}
          minDate={minDate}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateDropdown;
