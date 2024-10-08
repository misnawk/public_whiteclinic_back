import { sizes } from '@/styles/sizes';
import { ListItemText } from '@mui/material';

export type LabelProps = {
  text?: string;
  fontSize?: keyof typeof sizes.fontSize;
  color?: string;
};

const Label = ({ text = 'Default Label', fontSize = 'medium', color = 'black' }: LabelProps) => {
  return (
    <ListItemText
      primary={text}
      primaryTypographyProps={{ style: { fontSize: sizes.fontSize[fontSize], color } }}
    />
  );
};

export default Label;
