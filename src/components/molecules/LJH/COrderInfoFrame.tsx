import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import CCheckbox from '@/components/atom/CCheckbox';
import CDatePicker from '@/components/atom/CDatePicker';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import {
  Documents,
  MIN_DATE,
  OrderInfoModel,
  orderInfoValue,
  paymentOptions,
} from '@/constants/definition';
import { useState } from 'react';
import { writeInfoTable } from '@/util/actionUtil';

/**
 * @returns 주문정보 입력 테이블 컴포넌트
 */

const OrderInfoTableFrame = () => {
  const [orderData, setorderData] = useState<OrderInfoModel>({
    orderDate: MIN_DATE.format('YYYY년 MM월 DD일'),
    customerName: '',
    customerPhoneNum: '',
    customerAddr: '',
    customerComments: '',
    customerPayment: '',
    customerReciept: '',
    checkReciept: false,
  });

  const [recieptState, toggleReciept] = useState(false);

  const orderInfoChangeHandler = (key: string, value: orderInfoValue) => {
    setorderData((prevState) => ({ ...prevState, [key]: value }));
  };

  /**
   * 주문정보 테이블 셀 배열 (텍스트셀, 컴포넌트, Optional 서브컴포넌트(체크박스))
   */
  const orderInfoTableRows = [
    writeInfoTable(
      '예약일시',
      CDatePicker({
        label: '일정 선택',
        handleChange: (e) => {
          orderInfoChangeHandler('orderDate', String(e?.format('YYYY년 MM월 DD일')));
        },
      })
    ),
    writeInfoTable(
      '고객성함',
      CInput({
        labelProp: '고객 성함',
        type: 'text',
        isRequired: true,
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => {
          orderInfoChangeHandler('customerName', e.target.value);
        },
      })
    ),
    writeInfoTable(
      '연락처',
      CInput({
        labelProp: '고객 연락처',
        type: 'number',
        isRequired: true,
        placeholderProp: '`-` 를 제외하고 입력하세요',
        handleInput: (e) => {
          orderInfoChangeHandler('customerPhoneNum', e.target.value);
        },
      })
    ),
    writeInfoTable(
      '방문주소',
      CInput({
        labelProp: '고객 주소지',
        type: 'text',
        isRequired: true,
        placeholderProp: '상세 주소를 입력하세요',
        handleInput: (e) => {
          orderInfoChangeHandler('customerAddr', e.target.value);
        },
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        type: 'text',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (e) => {
          orderInfoChangeHandler('customerComments', e.target.value);
        },
      })
    ),
    writeInfoTable(
      '결제방식',
      CDropDown({
        contentList: paymentOptions,
        handleChange: (e) => orderInfoChangeHandler('customerPayment', e.target.value),
      })
    ),
    writeInfoTable(
      '증빙서류',
      CDropDown({
        contentList: Documents,
        handleChange: (e) => orderInfoChangeHandler('customerReciept', e.target.value),
      }),
      CCheckbox({
        label: '발행완료',
        isChecked: recieptState,
        handleChange: (e) => {
          orderInfoChangeHandler('checkReciept', e.target.checked);
          toggleReciept((state) => !state);
        },
      })
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {orderInfoTableRows.map((row) => (
            <TableRow key={row?.tableRow}>
              <TableCell sx={{ ...StyledTextTableCell }}>{row?.tableRow}</TableCell>
              <TableCell sx={{ ...StyledCompTableCell }}>
                {row?.components} {row?.subComponents}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderInfoTableFrame;
