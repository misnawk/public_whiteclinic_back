import { ListItemButton } from '@mui/material';
import Icon, { IconProps } from '../atom/Icon';
import Label, { LabelProps } from '../atom/Label';
import Link from 'next/link';

export type LinkButtonProps = {
  href: string;
  iconprops: IconProps;
  labelprops: LabelProps;
};

const LinkButton = ({ href, iconprops, labelprops }: LinkButtonProps) => {
  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <ListItemButton >
        <Icon {...iconprops} />
        <Label {...labelprops} />
      </ListItemButton>
    </Link>
  );
};

export default LinkButton;
