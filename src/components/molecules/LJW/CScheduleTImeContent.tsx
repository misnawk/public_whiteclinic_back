import { StyledTimeContent } from '@/styles/customize';
import { Box, Typography } from '@mui/material';

//timeslot 하나 컴포넌트 - atom 분류 가능할듯
type CScheduleTimeContentProps = {
  content: string;
};
const CScheduleTimeContent = ({ content }: CScheduleTimeContentProps) => {
  return (
    <Box sx={{ ...StyledTimeContent }}>
      <Typography variant="subtitle1" component="span">
        {content}
      </Typography>
    </Box>
  );
};

export default CScheduleTimeContent;
