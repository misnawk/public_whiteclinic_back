import LinkButton, { LinkButtonProps } from '../molecules/LinkButton';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const arr: LinkButtonProps[] = [
  {
    href: '/edit',
    iconprops: { icon: <FormatListBulletedIcon /> },
    labelprops: { text: '엄준식', color: '#dfdfdf', fontSize: 'medium' },
  },
  {
    href: '/edit',
    iconprops: { icon: <FormatListBulletedIcon /> },
    labelprops: { text: '엄준식', color: '#dfdfdf', fontSize: 'medium' },
  },
  {
    href: '/edit',
    iconprops: { icon: <FormatListBulletedIcon /> },
    labelprops: { text: '엄준식', color: '#dfdfdf', fontSize: 'medium' },
  },
];

const Test = () => {
  // return arr.map((v) => <LinkButton {...v} />);
};

export default Test;
