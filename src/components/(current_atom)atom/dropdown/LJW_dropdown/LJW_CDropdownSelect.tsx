import { InputLabel, Select, SelectChangeEvent } from '@mui/material';
import React, { Children } from 'react';

export type LJW_CDropDownSelectProps = {
  labelId: string;
  selectValue: string;
  labelContent: string;
  handleChange: (event: SelectChangeEvent) => void;
  children?: React.ReactNode;
};

const LJW_CDropDownSelect = ({
  labelId,
  labelContent,
  selectValue,
  handleChange,
  children,
}: LJW_CDropDownSelectProps) => {
  return (
    <>
      <InputLabel id={`${labelId}-label`}>{labelContent}</InputLabel>
      <Select
        labelId={`${labelId}-label`}
        id={labelId}
        value={selectValue}
        onChange={handleChange}
        autoWidth
        label={labelContent}
      >
        {children}
      </Select>
    </>
  );
};

export default LJW_CDropDownSelect;
