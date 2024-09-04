import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type receiptDropownList = {
  label?: string;
};

//증빙서류
export const Documents: receiptDropownList[] = [
  { label: '간이영수증' },
  { label: '세금계산서' },
  { label: '현금영수증' },
  { label: '카드영수증' },
  { label: '필요없음' },
];

type receiptDropdownProps = {
  id?: string;
  label?: '매출증빙';
  recieptItem?: receiptDropownList[];
  handleChange?: () => void;
};

const ReceiptDropdown = ({
  id,
  label = '매출증빙',
  recieptItem = Documents,
  handleChange,
}: receiptDropdownProps) => {
  return (
    <Box>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          sx={{ minWidth: 160, maxWidth: 'fit-content' }}
          id={id}
          value={recieptItem?.forEach((v) => v)}
          label={label}
          onChange={handleChange}
        >
          {recieptItem?.map((item, i) => (
            <MenuItem key={i} value={item.label}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ReceiptDropdown;
