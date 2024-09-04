import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DropDownBarProps } from '@/constants/definition';

/**
 * @param contentName 라벨명설정 - 현재 string 으로 되어있는데 차후 타입지정을 통해 변경예정
 * @param contentList 드롭다운 아이템 설정 - productDropdownList[] 배열형태로 설정
 * @param selectedValue 클라이언트가 선택한 아이템 참조용 변수 string | number 로 타입지정 되어있음
 * @param handleChange 클라이언트가 선택한 값 변화 적용을 위한 함수
 * @returns 자식 태그로 MenuItem 를 갖는 Select MUI 태그 반환
 */
const CDropDown = ({
  contentName = '',
  contentList,
  selectedValue,
  handleChange,
}: DropDownBarProps) => {
  return (
    <FormControl sx={{ alignSelf: 'center', minWidth: 120, paddingRight: 1 }} size="small">
      <InputLabel id="demo-select-small-label">{contentName}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedValue}
        defaultValue="선택"
        label={contentName}
        onChange={handleChange}
      >
        <MenuItem value="선택">
          <em>선택</em>
        </MenuItem>
        {contentList?.map((item, i) => (
          <MenuItem key={i} value={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CDropDown;
