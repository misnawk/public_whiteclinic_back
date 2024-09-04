import { ListItemIcon } from '@mui/material';
import { ReactElement } from 'react';

export type IconProps = {
  icon: ReactElement;
  color?: string;
};

const Icon = ({ icon, color }: IconProps) => {
  return <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>;
};
export default Icon;
