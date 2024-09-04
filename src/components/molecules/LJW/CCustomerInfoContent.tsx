import { CustomerInfoProps } from '@/constants/definition';
import { StyledCustomerInfo } from '@/styles/customize';
import { Box } from '@mui/material';

//스케쥴 표에 나오는 사용자 정보
const CCustomerInfoContent = ({ customer }: CustomerInfoProps) => {
  if (!customer) {
    return <div></div>;
  }
  const cPrice = customer?.totalPrice;
  const customerPrice = cPrice > 10000;
  const priceRender = customerPrice ? cPrice / 10000 + '만원' : cPrice + '원';

  return (
    <Box sx={{ ...StyledCustomerInfo }}>
      {customer.customerName} - {customer.customerContact} - {customer.customerAddress} -{' '}
      {customer.cleaningItem} - {customer.cleaningType} - {customer.modelEA}대 - {priceRender}
    </Box>
  );
};

export default CCustomerInfoContent;
