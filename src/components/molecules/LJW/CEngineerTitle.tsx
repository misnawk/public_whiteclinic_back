import { Box } from '@mui/material';
import CTitleContent from './CTitleContent';
import { StyledTitleBox } from '@/styles/customize';

//기사 이름 타이틀 컴포넌트
//backgroundcolor, color 따로 빼기.
type CEngineerTitleProps = {
  engineerName: string;
};

const CEngineerTitle = ({ engineerName }: CEngineerTitleProps) => {
  return (
    <Box sx={{ ...StyledTitleBox, backgroundColor: '#007fff', color: '#fff' }}>
      <CTitleContent variant="namebox" content={engineerName} subContent="기사" />
    </Box>
  );
};
export default CEngineerTitle;
