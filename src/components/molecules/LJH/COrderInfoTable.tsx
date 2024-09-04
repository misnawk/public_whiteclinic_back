import { Card, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import CDatePicker from '../../atom/CDatePicker';
import CDropDown from '../../atom/CDropdown';
import CCheckbox from '../../atom/CCheckbox';
import { Documents, paymentOptions } from '@/constants/definition';
import CInput from '../../atom/CInput';

export type OrderInfoTableRowTextType =
  | '예약일시'
  | '고객성함'
  | '연락처'
  | '방문주소'
  | '특이사항'
  | '결제방식'
  | '증빙서류'
  | '발행완료';

// TODO: 매출정보 입력 테이블용 라벨타입 정의
// export type SalesInfoTableRowTextType =
//   | '세척품목'
//   | '세척대수'
//   | '세척방식'
//   | '할인여부'
//   | '세척금액'
//   | '특이사항';

/**
 * @param tableRow 테이블 첫번째 셀 텍스트 파라미터, 유니온으로 타입지정 되어있음
 * @param components 렌더링할 컴포넌트 파라미터, 각 tableRow에 맞게 호출하여 사용
 * @param subComponents 각 줄에 컴포넌트가 두 개 이상 존재할 시 사용할 컴포넌트 파라미터 -> ex) 체크박스
 * @description //TODO: atom 컴포넌트로 분리 어떻게 할지 고려중...
 */

const createData = (
  tableRow: OrderInfoTableRowTextType,
  components: JSX.Element,
  subComponents?: JSX.Element
) => {
  return { tableRow, components, subComponents };
};

const rows = [
  createData('예약일시', CDatePicker({ label: '일정 선택' })),
  createData('고객성함', CInput({ labelProp: '고객 성함', type: 'text', isRequired: true })),
  createData('연락처', CInput({ labelProp: '고객 연락처', type: 'number', isRequired: true })),
  createData('방문주소', CInput({ labelProp: '고객 주소지', type: 'text', isRequired: true })),
  createData('특이사항', CInput({ labelProp: '특이사항', type: 'text' })),
  createData('결제방식', CDropDown({ contentList: paymentOptions })),
  createData('증빙서류', CDropDown({ contentList: Documents })),
];

const OrderInfoTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.tableRow}>
              <TableCell
                sx={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  letterSpacing: 5,
                  backgroundColor: '#f5f5f5',
                  width: '120px',
                  textAlign: 'center',
                  border: 'none',
                }}
              >
                {row.tableRow}
              </TableCell>
              <TableCell
                sx={{
                  display: 'flex',
                  gap: '10px',
                }}
              >
                {row.components}
                {row?.subComponents}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderInfoTable;
