import { MenuItem } from '@mui/material';

export type LJW_CDropItemProps = {
  value: string | number;
};
const LJW_CDropItem = ({ value }: LJW_CDropItemProps) => {
  return <MenuItem value={value}>{value}</MenuItem>;
};

export default LJW_CDropItem;
