import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import { Box } from '@mui/material';
import { state, WeekDays } from '@/constants/definition';
import CDatePicker from '@/components/atom/CDatePicker';

const rightinfo = [
  [
    '정기휴무',
    <CDropDown contentList={WeekDays} contentName="요일 선택" />,
    <CCheckbox<state> label="휴무추가" isChecked={false} />,
  ],

  ['비정기휴무', <CDatePicker />, <CCheckbox<state> label="휴무추가" isChecked={false} />],
];

export const RightInfoComponent = () => {
  return (
    <Box
      sx={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
      }}
    >
      {rightinfo.map((item, i) => (
        <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {item}
        </Box>
      ))}
    </Box>
  );
};
