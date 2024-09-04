import { Box } from '@mui/material';
import CTitleContent from './CTitleContent';
import { TODAY } from '@/constants/definition';
import { Dayjs } from 'dayjs';
import { StyledTitleBox } from '@/styles/customize';

//날짜 제목 컴포넌트
//나중에 CEnginnerTitle과 합칠 수 있을지도
type CScheduleDateBoxProps = {
  dateInfo?: Dayjs | null;
};

const CScheduleDateBox = ({ dateInfo = TODAY }: CScheduleDateBoxProps) => {
  return (
    <Box
      sx={{
        ...StyledTitleBox,
        backgroundColor: '#fff',
        color: '#007fff',
      }}
    >
      <CTitleContent variant="namebox" content={dateInfo} />
    </Box>
  );
};

export default CScheduleDateBox;
