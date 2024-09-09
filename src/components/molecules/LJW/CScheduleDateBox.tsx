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
  const formattedContent = () =>
    typeof dateInfo === 'string' || dateInfo === null
      ? dateInfo
      : dateInfo.format('YYYY년 MM월 DD일');
  return (
    <Box
      sx={{
        ...StyledTitleBox,
        backgroundColor: '#fff',
        color: '#007fff',
      }}
    >
      <CTitleContent variant="namebox" content={formattedContent()} />
    </Box>
  );
};

export default CScheduleDateBox;
