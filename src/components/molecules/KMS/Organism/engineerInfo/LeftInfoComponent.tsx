import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { Box } from '@mui/material';

type leftinfo = '연락처' | '거주지' | '가능품목' | '특이사항';
const leftinfo: leftinfo[] = ['연락처', '거주지', '가능품목', '특이사항'];


const openInfo = () => {
  window.location.href = '/engineer/e_salary';
};
export const LeftInfoComponent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {leftinfo.map((item) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {item} <CInput isReadOnly containerWidth="450px" />{' '}
        </Box>
      ))}
      <CButton content="급여사항확인" fontSize="large" handleClick={openInfo} />
    </Box>
  );
};
