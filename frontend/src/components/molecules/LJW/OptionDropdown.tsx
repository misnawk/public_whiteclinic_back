import CDropDown from '@/components/atom/CDropdown';
import { DropDownBarProps } from '@/constants/definition';
import { SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';

//옵션 이름 + dropdown으로 이루어진 컴포넌트
//코드 리뷰 이후 삭제

type OptionDropdownProps = {
  optionTitle: string;
  dropdownprops: DropDownBarProps;
};

const OptionDropdown = ({ optionTitle, dropdownprops }: OptionDropdownProps) => {
  const [isSelected, setIsSelected] = useState<string>('');
  const handleSelect = (event: SelectChangeEvent) => {
    setIsSelected(event.target.value);
  };

  return (
    <div className="flex gap-1 p-1">
      <div>
        <Typography variant="subtitle2">{optionTitle}</Typography>
      </div>
      <CDropDown {...dropdownprops} selectedValue={isSelected} handleChange={handleSelect} />
    </div>
  );
};

export default OptionDropdown;
