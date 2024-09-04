import { styled } from '@mui/material';
import { CSSProperties } from 'styled-components';

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

export const StyledInputRoot = styled('div')(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
      display: flex;
      flex-flow: row nowrap;
    `
);

export const StyledInput = styled('input')(
  ({ theme }) => `
      font-size: 0.875rem;
      font-family: inherit;
      font-weight: 400;
      line-height: 1.375;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 2px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[300]};
      box-shadow: 0px 2px 4px ${
        theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
      };
      border-radius: 8px;
      margin: 0 8px;
      padding: 10px 12px;
      outline: 0;
      min-width: 0;
      width: 4rem;
      text-align: center;
    
      &:hover {
        border-color: ${blue[400]};
      }
    
      &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
      }
    
      &:focus-visible {
        outline: 0;
      }
    `
);

export const StyledButton = styled('button')(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      line-height: 1.5;
      border: 2px solid;
      border-radius: 999px;
      border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      width: 32px;
      height: 32px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 120ms;
      margin-top: 5px;
    
      &:hover {
        cursor: pointer;
        background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
        border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
        color: ${grey[50]};
      }
    
      &:focus-visible {
        outline: 0;
      }
    
      &.increment {
        order: 1;
      }
    `
);

/**
 number type input 화살표 요소 제거 style
 */
export const hideNumberInputArrows = {
  '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
    display: 'none',
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
  },
};

export const StyledScheduleTable = { display: 'flex', gap: '6px' };
export const StyledScheduleTimeline = { display: 'flex', flexDirection: 'column', gap: '6px' };
export const StyledTimeSlot = {
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  textAlign: 'center',
};
export const StyledTitleBox = {
  backgroundColor: '#007fff' || '#fff',
  color: '#fff' || '#007fff',
  borderRadius: '8px',
  textAlign: 'center',
  width: '1000px',
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const StyledTimeContent = {
  width: '100px',
  height: '30px',
  padding: '3px',
  textAlign: 'center',
};

export const StyledCustomerInfo: CSSProperties = {
  height: '20px',
  padding: '3px',
  textAlign: 'center',
};

export const StyledTextTableCell: CSSProperties = {
  fontSize: 17,
  fontWeight: 'bold',
  letterSpacing: 5,
  backgroundColor: '#dbdbdb',
  width: '150px',
  height: '100%',
  textAlign: 'center',
  alignItems: 'center',
  border: 'none',
};

export const StyledCompTableCell: CSSProperties = {
  display: 'flex',
  gap: '10px',
  height: '100%',
};

export const StyledButtonContainer: CSSProperties = {
  flexDirection: 'row',
  gap: 3,
  padding: 3,
  justifyContent: 'center',
};
