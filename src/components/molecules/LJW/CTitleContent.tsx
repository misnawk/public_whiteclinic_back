import { Typography, TypographyProps } from '@mui/material';
import { Dayjs } from 'dayjs';

//제목 내용 컴포넌트
export type CTitleContentProps = {
  content: string | null;
  variant?: TypographyProps['variant'];
  subContent?: string;
};
const CTitleContent = ({ content, variant = 'h5', subContent }: CTitleContentProps) => {
  return (
    <Typography variant={variant}>
      {content} {subContent}
    </Typography>
  );
};

export default CTitleContent;
