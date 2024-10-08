import { OrderInfoTableRowTextType, SalesInfoTableRowTextType } from '@/constants/definition';

/**
 *
 * @param tableRow 테이블 텍스트타입 OrderInfoTableRowTextType | SalesInfoTableRowTextType
 * @param components atomize 컴포넌트
 * @param subComponents 2개 이상 컴포넌트 렌더링 필요할 시 호출
 * @returns
 */
export const writeInfoTable = (
  tableRow: OrderInfoTableRowTextType | SalesInfoTableRowTextType,
  components: JSX.Element,
  subComponents?: JSX.Element
) => {
  return { tableRow, components, subComponents };
};
