import React from 'react';
import { Box } from '@mui/material';
import { AllDropDownList } from './DropDownData';
import { DropdownSelectProps, KMS_CDropdownProps } from './DropdownConfig';
import { KMS_CDropdownController } from './KMS_CDropdownController';

export const KMS_CDropdown = ({ type }: KMS_CDropdownProps) => {
  const config = DropdownSelectProps()[type as AllDropDownList];

  return (
    <Box>
      <KMS_CDropdownController type={type} config={config} />
    </Box>
  );
};

export default KMS_CDropdown;
