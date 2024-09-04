import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
//세척품목

export type productDropownList = {
  label?: string;
};

export const CleaningItem: productDropownList[] = [
  { label: '벽걸이' },
  { label: '원웨이' },
  { label: '포웨이' },
  { label: '스탠드' },
  { label: '투인원' },
  { label: '원형 360 에어컨' },
  { label: '파세코 창문형 에어컨' },
  { label: '사각 덕트' },
  { label: '원형 덕트' },
  { label: '메인 덕트' },
  { label: '통돌이' },
  { label: '드럼' },
  { label: '트윈워시' },
  { label: '건조기' },
  { label: '드럼형 아기사랑 세탁기' },
  { label: '통돌이형 아기사랑 세탁기' },
  { label: '일반 실외기' },
  { label: '대형 실외기' },
];

type ProductDropdownProps = {
  id?: string;
  label?: '제품 카테고리';
  productItem?: productDropownList[];
  handleChange?: () => void;
};

const ProductDropdown = ({
  id,
  label = '제품 카테고리',
  productItem = CleaningItem,
  handleChange,
}: ProductDropdownProps) => {
  return (
    <Box>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          sx={{ minWidth: 160, maxWidth: 'fit-content' }}
          id={id}
          value={productItem?.forEach((v) => v)}
          label={label}
          onChange={handleChange}
        >
          {productItem?.map((item, index) => (
            <MenuItem key={index} value={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductDropdown;
