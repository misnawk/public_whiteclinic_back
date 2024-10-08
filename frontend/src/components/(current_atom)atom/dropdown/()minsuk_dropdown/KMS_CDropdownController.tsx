import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DefaultDropdownSize, DropdownConfig, DropdownSelectProps } from './DropdownConfig';
import { AllDropDownList, DropDownList } from './DropDownData';
import { dropdownStyle } from '@/styles/sizes';

type KMS_CDropdownControllerProps = {
  type: AllDropDownList;
  config: DropdownConfig;
  onValueChange?: (value: string) => void;
};

export const KMS_CDropdownController = ({
  type,
  config,
  onValueChange,
}: KMS_CDropdownControllerProps) => {
  const SelectWidth =
    config?.width != undefined ? dropdownStyle.minWidth[config.width] : DefaultDropdownSize.with;

  const handleChange = (event: SelectChangeEvent<string>) => {
    onValueChange?.(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <InputLabel>{config.text}</InputLabel>
        <Select
          sx={{ minWidth: SelectWidth, maxWidth: 'fit-content' }}
          label={config.text}
          onChange={handleChange}
        >
          {DropDownList[type]?.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
