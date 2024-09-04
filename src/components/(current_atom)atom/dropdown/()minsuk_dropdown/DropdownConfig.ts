import { dropdownStyle } from '@/styles/sizes';
import { AllDropDownList } from './DropDownData';
import { SelectChangeEvent } from '@mui/material';
import { type } from 'os';

export type DropdownConfig = {
  text: AllDropDownList;
  width?: keyof typeof dropdownStyle.minWidth;
  margin?: keyof typeof dropdownStyle.margin;
};

export const DropdownSelectProps = (): Record<AllDropDownList, DropdownConfig> => ({
  세척품목: {
    text: '세척품목',
  },
  결제방식: {
    text: '결제방식',
  },
  급여요일: {
    text: '급여요일',
  },
  수당률: {
    text: '수당률',
  },
  증빙서류: {
    text: '증빙서류',
  },
});
export const DefaultDropdownSize = {
  with: dropdownStyle.minWidth.medium,
};

const DropDownTypeObject = {
  세척품목: '세척품목',
  결제방식: '결제방식',
  급여요일: '급여요일',
  수당률: '수당률',
  증빙서류: '증빙서류',
} as const;

export type KMS_CDropdownProps = {
  type: keyof typeof DropDownTypeObject;
};
