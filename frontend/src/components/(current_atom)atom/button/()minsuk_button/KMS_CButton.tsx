import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { buttonStyle, sizes } from '@/styles/sizes';
import { Height } from '@mui/icons-material';
import {
  ButtonSelectProps,
  DefaultButtonSize,
  iswhiteBuleButton,
  KMS_CButtonProps,
} from './ButtonConfig';
import { colors } from '@/styles/colors';

export const KMS_CButton = ({ type }: { type: KMS_CButtonProps }) => {
  const buttonProps = ButtonSelectProps();
  const config = buttonProps[type];

  const height =
    config.height != undefined ? buttonStyle.buttonSize[config.height] : DefaultButtonSize.height;
  const width =
    config.width != undefined ? buttonStyle.buttonSize[config.width] : DefaultButtonSize.width;

  const fontColor = iswhiteBuleButton(type) ? colors.button.white : colors.button.black;
  const backgroundColor = iswhiteBuleButton(type) ? colors.button.blue : colors.button.gray;

  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        onClick={config?.onclick}
        style={{
          height: height,
          width: width,
          color: fontColor,
          background: backgroundColor,
        }}
      >
        {config?.text}
      </Button>
    </Stack>
  );
};

export default KMS_CButton;
