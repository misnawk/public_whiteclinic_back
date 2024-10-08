import { colors } from '@/styles/colors';
import { buttonStyle } from '@/styles/sizes';

export type ButtonType = '취소' | '등록' | '아니오' | '등록중지' | '추가등록' | '급여사항확인';

export type ButtonColorType_whit_blue = '등록' | '추가등록' | '급여사항확인';
export type ButtonColorType_black_gray = '취소' | '아니오' | '등록중지';

export type ButtonConfig = {
  text: ButtonType;
  height?: keyof typeof buttonStyle.buttonSize;
  width?: keyof typeof buttonStyle.buttonSize;
  onclick: () => void;
};

export const ButtonSelectProps = (): Record<ButtonType, ButtonConfig> => ({
  취소: {
    text: '취소',
    onclick: () => console.log('취소 버튼클릭'),
  },

  등록: {
    text: '등록',
    onclick: () => console.log('등록 버튼클릭'),
  },

  아니오: {
    text: '아니오',
    onclick: () => console.log('아니오 버튼클릭'),
  },

  등록중지: {
    text: '등록중지',
    onclick: () => console.log('등록중지 버튼클릭'),
  },

  추가등록: {
    text: '추가등록',
    onclick: () => console.log('추가등록 버튼클릭'),
  },

  급여사항확인: {
    text: '급여사항확인',
    onclick: () => console.log('급여사항 버튼클릭'),
  },
});

const ButtonTypeObject = {
  취소: '취소',
  등록: '등록',
  아니오: '아니오',
  등록중지: '등록중지',
  추가등록: '추가등록',
  급여사항확인: '급여사항확인',
};

export const DefaultButtonSize = {
  height: buttonStyle.buttonSize.height,
  width: buttonStyle.buttonSize.width,
};
export type KMS_CButtonProps = keyof typeof ButtonTypeObject;

export const iswhiteBuleButton = (type: ButtonType): type is ButtonColorType_whit_blue =>
  ['등록', '추가등록', '급여사항확인'].includes(type);

export const isBlackGrayButton = (type: ButtonType): type is ButtonColorType_whit_blue =>
  ['취소', '아니오', '등록중지'].includes(type);
