import CCheckbox from '@/components/atom/CCheckbox';
import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { CNumberInput } from '@/components/atom/CNumberInput';
import { CleaningItem, SalesInfoModel, salesInfoValue } from '@/constants/definition';
import { StyledCompTableCell, StyledTextTableCell } from '@/styles/customize';
import { writeInfoTable } from '@/util/actionUtil';
import { calculateComplexPrice } from '@/util/calculatePriceUtil';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const SalesInfoFrame = () => {
  const [salesData, setSalesData] = useState<SalesInfoModel>({
    item: '',
    writtenItem: '',
    itemQuantity: 0,
    isComposite: false,
    isRegular: false,
    isDiscounted: false,
    isModifiable: false,
    discountRatio: '',
    totalPrice: 0,
    comments: '',
  });

  // 제품명 수기입력 readOnly 프롭 토글용 상태변수
  const isItemSelected = !!salesData.item && salesData.item !== '선택';

  // 체크박스 상태 관리 변수
  const handleCheckboxChange = (
    type: 'isComposite' | 'isRegular' | 'isDiscounted',
    stateFn: Dispatch<SetStateAction<SalesInfoModel>>
  ) => {
    stateFn((prevState) => {
      const newState = { ...prevState };
      if (type === 'isComposite' || type === 'isRegular') {
        newState.isComposite = type === 'isComposite' ? !prevState.isComposite : false;
        newState.isRegular = type === 'isRegular' ? !prevState.isRegular : false;
      } else {
        newState[type] = !prevState[type];
      }

      return newState;
    });
  };

  const salesInfoChangeHandler = (
    key: keyof SalesInfoModel,
    value: salesInfoValue | null,
    stateFn: Dispatch<SetStateAction<SalesInfoModel>>
  ) => {
    value && stateFn((prevState) => ({ ...prevState, [key]: value }));
    !value && console.log('salesInfo parameter has no value');
  };

  const amountTotalPrice = (price: number | undefined) => {
    price && setSalesData((prevState) => ({ ...prevState, totalPrice: price }));
    !price && console.log('price parameter has no value');
  };

  useEffect(() => {
    console.log({ ...salesData });
    const totalPrice = calculateComplexPrice(salesData);

    if (totalPrice !== salesData.totalPrice) {
      amountTotalPrice(totalPrice);
    }
  }, [{ ...salesData }]);

  const salesInfoTableRows = [
    writeInfoTable(
      '세척품목',
      CDropDown({
        contentList: CleaningItem,
        handleChange: (event) => salesInfoChangeHandler('item', event.target.value, setSalesData),
      }),
      CInput({
        type: 'text',
        placeholderProp: '분류 불가능한 세척품목',
        labelProp: '제품명 입력',
        handleInput: (event) =>
          salesInfoChangeHandler('writtenItem', event.target.value, setSalesData),
        isDisabled: isItemSelected,
      })
    ),
    writeInfoTable(
      '세척대수',
      CNumberInput({
        handleChange: (event, value) => salesInfoChangeHandler('itemQuantity', value, setSalesData),
      })
    ),
    writeInfoTable(
      '세척방식',
      CCheckbox({
        label: '종합세척',
        isChecked: salesData.isComposite,
        handleChange: () => handleCheckboxChange('isComposite', setSalesData),
      }),
      CCheckbox({
        label: '일반세척',
        isChecked: salesData.isRegular,
        handleChange: () => handleCheckboxChange('isRegular', setSalesData),
      })
    ),
    writeInfoTable(
      '할인여부',
      CCheckbox({
        label: '할인적용',
        isChecked: salesData.isDiscounted,
        handleChange: () => handleCheckboxChange('isDiscounted', setSalesData),
      }),
      CInput({
        labelProp: '할인율',
        placeholderProp: '할인율을 입력하세요',
        isDisabled: !salesData.isDiscounted,
        type: 'text',
        handleInput: (event) =>
          salesInfoChangeHandler('discountRatio', event.target.value, setSalesData),
      })
    ),
    writeInfoTable(
      '세척금액',
      CInput({
        isModifiable: true,
        type: 'number',
        modifyInput: () =>
          salesInfoChangeHandler('isModifiable', !salesData.isModifiable, setSalesData),
        placeholderProp: '할인 금액 출력',
        variableValue: salesData.totalPrice,
        adornment: '원',
        isDisabled: !salesData.isModifiable,
      })
    ),
    writeInfoTable(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (event) =>
          salesInfoChangeHandler('comments', event.target.value, setSalesData),
      })
    ),
  ];

  return (
    <TableContainer sx={{ overflow: 'hidden' }}>
      <Table>
        <TableBody>
          {salesInfoTableRows.map((row) => (
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

export default SalesInfoFrame;
