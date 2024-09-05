'use client';

import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName } from '@/constants/definition';
import { Box } from '@mui/material';

const PersonName = [
  '강민석',
  '김민석',
  '강강민석',
  '강민',
  '강강강',
  '강민민',
  '민민민',
  '석석석',
  '김김김',
  '강강강',
  'ㅇㅇㅇ',
  '김김김',
  '강강강',
  '김김김',
  '강강강',
];

export const NameCheckboxs = () => (
  <Box
    sx={{
      display: 'flex',
      backgroundColor: '#e0e0e0',
      width: '100%',
      borderRadius: '10px',
      overflowX: 'scroll',
      overflowY: 'hidden',
      scrollbarWidth: 'thin',
      scrollbarColor: 'darkgray lightgray',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
      }}
    >
      {PersonName.map((name) => (
        <Box key={name} sx={{ flexShrink: 0, marginRight: '10px' }}>
          <CCheckbox<engineerName> label={name} isChecked={false} />
        </Box>
      ))}
    </Box>
  </Box>
);
