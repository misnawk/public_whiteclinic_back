import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

type paymentDropdownList = {
  label?: string;
};
const paymentOptions: paymentDropdownList[] = [
  { label: '계좌이체' },
  { label: '카드결제' },
  { label: '숨고페이' },
  { label: '현장현금결제' },
];

type paymentDropdownProps = {
  id?: string;
  label?: '결제방식';
  payment?: paymentDropdownList[];
  handleChange?: () => void;
};

const PaymentDropdown = ({
  id,
  label = '결제방식',
  payment = paymentOptions,
  handleChange,
}: paymentDropdownProps) => {
  return (
    <Box>
      <FormControl>
        <InputLabel>{label}</InputLabel>
        <Select
          sx={{ minWidth: 160, maxWidth: 'fit-content' }}
          id={id}
          value={payment?.forEach((v) => v)}
          label={label}
          onChange={handleChange}
        >
          {paymentOptions?.map((option, i) => (
            <MenuItem key={i} value={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PaymentDropdown;
