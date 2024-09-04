import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import LJW_CDropItem, { LJW_CDropItemProps } from './LJW_CDropMenuItem';
import LJW_CDropDownSelect, { LJW_CDropDownSelectProps } from './LJW_CDropdownSelect';

type DropMenuItem = {
  label: string | number;
};
export type LJW_CDropdownBoxProps = {
  // dropmenuItemProps: LJW_CDropItemProps;
  dropSelectProps: LJW_CDropDownSelectProps;
  dropItems: DropMenuItem[];
};

const LJW_CDropdownBox = ({
  // dropmenuItemProps,
  dropSelectProps,
  dropItems,
}: LJW_CDropdownBoxProps) => {
  const [isSelected, setisSelected] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setisSelected(event.target.value);
    dropSelectProps.handleChange?.(event);
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <LJW_CDropDownSelect
          {...dropSelectProps}
          selectValue={isSelected}
          handleChange={handleChange}
        >
          {dropItems.map((item, index) => (
            <div key={index}>
              {Object.entries(item).map(([key, value], idx) => (
                <LJW_CDropItem key={idx} value={String(value)} />
              ))}
            </div>
          ))}
        </LJW_CDropDownSelect>
      </FormControl>
    </div>
  );
};

export default LJW_CDropdownBox;
