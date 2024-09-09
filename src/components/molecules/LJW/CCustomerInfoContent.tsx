import { CustomerInfoProps } from '@/constants/definition';
import { StyledCustomerInfo } from '@/styles/customize';
import { Box, Typography } from '@mui/material';

//스케쥴 표에 나오는 사용자 정보
const CCustomerInfoContent = ({ customer }: CustomerInfoProps) => {
  if (!customer) {
    return <div></div>;
  }
  const cPrice = customer?.totalPrice;
  const customerPrice = cPrice > 10000;
  const priceRender = customerPrice ? cPrice / 10000 + '만원' : cPrice + '원';

  //customer.comments의 존재 유무에 따라 다르게 출력
  const renderCustomerInfo = () =>
    customer.customerComments
      ? `${customer.customerComments} - ${customer.cleaningType} - ${customer.itemQuantity}대 - ${priceRender}`
      : `${customer.cleaningType} - ${customer.itemQuantity}대 - ${priceRender}`;

  return (
    <Box sx={{ ...StyledCustomerInfo }}>
      <Typography variant="subtitle1" component="span">
        {customer.customerName} - {customer.customerContact} - {customer.customerAddress} -{' '}
        {customer.cleaningItem} - {renderCustomerInfo()}
      </Typography>
    </Box>
  );
};

export default CCustomerInfoContent;
