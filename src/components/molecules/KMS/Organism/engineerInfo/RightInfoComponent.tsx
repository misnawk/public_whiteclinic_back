import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import { Box } from '@mui/material';
import { state, WeekDays } from '@/constants/definition';
import CDatePicker from '@/components/atom/CDatePicker';

const rightinfo = [
  [
    '휴무등록',
    <CDropDown contentList={WeekDays} contentName="요일 선택" />,
    <CCheckbox<state> label="휴무추가" isChecked={false} />,
  ],

  ['휴무등록', <CDatePicker />, <CCheckbox<state> label="휴무추가" isChecked={false} />],
];

export const RightInfoComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        // border: '1px solid black',
      }}
    >
      {rightinfo.map((item) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>{item}</Box>
      ))}
    </Box>
  );
};
