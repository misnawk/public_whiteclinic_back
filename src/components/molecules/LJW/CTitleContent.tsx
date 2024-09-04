import { Typography, TypographyProps } from '@mui/material';
import { Dayjs } from 'dayjs';

//제목 내용 컴포넌트
export type CTitleContentProps = {
  content: string | Dayjs | null;
  variant?: TypographyProps['variant'];
  subContent?: string;
};
const CTitleContent = ({ content, variant = 'h5', subContent }: CTitleContentProps) => {
  // Dayjs 객체인 경우, 문자열로 변환
  const formattedContent =
    typeof content === 'string' || content === null ? content : content.format('YYYY년 MM월 DD일');

  return (
    <Typography variant={variant}>
      {formattedContent} {subContent}
    </Typography>
  );
};

export default CTitleContent;
