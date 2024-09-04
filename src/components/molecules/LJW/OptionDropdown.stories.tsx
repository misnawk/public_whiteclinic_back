import { Documents, DropDownBarProps } from '@/constants/definition';
import OptionDropdown from './OptionDropdown';

const meta = {
  title: 'molecules/OptionDropdown',
  component: OptionDropdown,
  argTypes: {},
  args: {},
};

export default meta;

export const Primary = {
  args: {
    optionTitle: '증빙서류',
    dropdownprops: {
      contentName: '증빙서류',
      contentList: Documents,
      selectedValue: '',
    } as DropDownBarProps,
  },
};
