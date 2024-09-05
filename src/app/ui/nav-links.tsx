'use client';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: '기사님 관리',
    icon: LocalShippingIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/engineer/e_list',
        icon: FormatListBulletedIcon,
      },
      { name: '등록하기', href: '/engineer/e_registration', icon: PlaylistAddIcon },
      { name: '수정하기', href: '/engineer/e_salary', icon: SettingsIcon },
    ],
  },
  {
    title: '회원 관리',
    icon: PeopleIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/customers/c_list',
        icon: FormatListBulletedIcon,
      },
      {
        name: '등록하기',
        href: '/customers/c_register',
        icon: PlaylistAddIcon,
      },
      { name: '수정하기', href: '/customers/c_modify', icon: SettingsIcon },
    ],
  },
  {
    title: '스케줄',
    icon: EditCalendarIcon,
    links: [
      {
        name: '리스트 보기',
        href: '/schedule/s_list',
        icon: FormatListBulletedIcon,
      },
      { name: '추가하기', href: '/schedule/s_register', icon: PlaylistAddIcon },
      { name: '수정하기', href: '/schedule/s_modify', icon: SettingsIcon },
    ],
  },
  {
    title: '매출 관리',
    icon: TrendingUpIcon,
    links: [
      {
        name: '일자별 매출',
        href: '/sales/daily',
        icon: FormatListBulletedIcon,
      },
      { name: '주간 매출', href: '/sales/weekly', icon: PlaylistAddIcon },
      { name: '월별 매출', href: '/sales/monthly', icon: SettingsIcon },
    ],
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((menuItem) => (
        <div key={menuItem.title}>
          <ListItem
            sx={{
              color: '#E8E3D2',
              fontSize: '12px',
              gap: '10px',
            }}
          >
            <menuItem.icon />
            {menuItem.title}
          </ListItem>
          {menuItem.links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link key={link.name} href={link.href} passHref style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={{
                    ':hover': { color: '#1dc4e9' },
                    color: pathname === link.href ? '#1dc4e9' : '#9FB3D0',
                  }}
                >
                  <ListItemIcon>
                    <LinkIcon
                      sx={{
                        color: pathname === link.href ? '#1dc4e9' : '#9FB3D0',
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={link.name} />
                </ListItemButton>
              </Link>
            );
          })}
          <Divider />
        </div>
      ))}
    </>
  );
}
