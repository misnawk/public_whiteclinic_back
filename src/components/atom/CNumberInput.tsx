import * as React from 'react';

import { NumberInputType } from '@/constants/definition';
import { NumberInput } from './CBaseNumberInput';

/**
 * @param handleChange 세척대수 입력값 변경 시 적용을 위한 함수 프롭
 * 입력 가능한 최소, 최대값이 각각 0, 99 로 설정되어 있음, 해당 컴포넌트에서 직접설정 가능
 */
export const CNumberInput = ({ handleChange }: NumberInputType) => {
  return <NumberInput min={0} max={99} onChange={handleChange} placeholder="수량" />;
};
