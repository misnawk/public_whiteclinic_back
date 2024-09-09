import { sizes } from '@/styles/sizes';
import { SelectChangeEvent } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { ComponentProps, FocusEvent, KeyboardEvent, PointerEvent } from 'react';

export type ButtonContent =
  | '취소'
  | '등록'
  | '등록중지'
  | '추가등록'
  | '아니오'
  | '급여사항확인'
  | '휴무등록';
type btnType = 'button' | 'submit' | 'reset';
type fontSizeProps = keyof typeof sizes.fontSize;
type fontWeightProps = keyof typeof sizes.fontWeight;

export type ButtonProps = {
  content: ButtonContent;
  fontSize?: fontSizeProps;
  fontWeight?: fontWeightProps;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  type?: btnType;
  handleClick?: (event: any) => void;
};

export type state = '발행완료' | '지급완료' | '휴무추가';
export type revenue = '종합세척' | '일반세척' | '할인적용';
export type engineerName = string;

export type skill =
  | '벽걸이'
  | '원웨이'
  | '포웨이'
  | '원형'
  | '스탠드'
  | '실외기'
  | '덕트'
  | '창문형'
  | '통돌이'
  | '드럼'
  | '빌트인'
  | '건조기';

export const skillArr: skill[] = [
  '벽걸이',
  '원웨이',
  '포웨이',
  '원형',
  '스탠드',
  '실외기',
  '덕트',
  '창문형',
  '통돌이',
  '드럼',
  '빌트인',
  '건조기',
];
export type allType = state | revenue | skill;

export type salesInfoValue = string | number | boolean;
export type orderInfoValue = string | boolean;

export type CheckboxProps<T extends allType | engineerName> = {
  label: T;
  engineerName?: engineerName;
  isChecked?: boolean;
  width?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAnyChecked?: boolean;
};

export type ProductDropdownList = {
  label?: string;
};

export type NumberInputType = {
  handleChange: (
    event: FocusEvent<HTMLInputElement, Element> | PointerEvent<Element> | KeyboardEvent<Element>,
    value: number | null
  ) => void;
};

export const CleaningItem: ProductDropdownList[] = [
  { label: '벽걸이' },
  { label: '원웨이' },
  { label: '포웨이' },
  { label: '스탠드' },
  { label: '투인원' },
  { label: '원형 360 에어컨' },
  { label: '파세코 창문형 에어컨' },
  { label: '사각 덕트' },
  { label: '원형 덕트' },
  { label: '메인 덕트' },
  { label: '통돌이' },
  { label: '드럼' },
  { label: '트윈워시' },
  { label: '건조기' },
  { label: '드럼형 아기사랑 세탁기' },
  { label: '통돌이형 아기사랑 세탁기' },
  { label: '일반 실외기' },
  { label: '대형 실외기' },
];

export type builtInProductType = '드럼';
export type defaultPriceProduct =
  | '건조기'
  | '트윈워시'
  | '드럼형 아기사랑 세탁기'
  | '통돌이형 아기사랑 세탁기';
export type onlyCompositeProduct =
  | '원형 360 에어컨'
  | '파세코 창문형 에어컨'
  | '사각 덕트'
  | '원형 덕트'
  | '메인 덕트'
  | '일반실외기'
  | '대형실외기';
export type regularProduct = '벽걸이' | '원웨이' | '포웨이';
export type rangedPriceProduct = '스탠드' | '투인원';

export type productLabelTypes =
  | builtInProductType
  | regularProduct
  | defaultPriceProduct
  | onlyCompositeProduct
  | rangedPriceProduct;

export const paymentOptions: ProductDropdownList[] = [
  { label: '계좌이체' },
  { label: '카드결제' },
  { label: '숨고페이' },
  { label: '현장현금결제' },
];

export const Documents: ProductDropdownList[] = [
  { label: '간이영수증' },
  { label: '세금계산서' },
  { label: '현금영수증' },
  { label: '카드영수증' },
  { label: '필요없음' },
];

export const WeekDays: ProductDropdownList[] = [
  { label: '월요일' },
  { label: '화요일' },
  { label: '수요일' },
  { label: '목요일' },
  { label: '금요일' },
  { label: '토요일' },
  { label: '일요일' },
];

export const AllowanceRates: ProductDropdownList[] = Array.from({ length: 7 }, (_, index) => ({
  label: `${50 + index * 5}%`,
}));

export type DropDownBarProps = {
  contentName?: string;
  contentList?: ProductDropdownList[];
  handleChange?: (event: SelectChangeEvent) => void;
  selectedValue?: string;
};

// 인풋라벨 타입
type LabelType =
  | '고객 성함'
  | '고객 연락처'
  | '고객 주소지'
  | '특이사항'
  | '할인율'
  | '연도'
  | '수당'
  | '수당 합계'
  | '제품명 직접입력'
  | '기사 성함'
  | '기사 연락처'
  | '기사 주소지'
  | '제품명 입력';

type HelperTextType =
  | '이름을 정확히 입력하세요'
  | '- 를 제외하고 입력하세요'
  | '주소지를 정확히 입력하세요'
  | '특수문자를 사용할 수 없습니다.'
  | '숫자를 입력할 수 없습니다.'
  | '문자열만 입력 가능합니다.'
  | '숫자만 입력 가능합니다.'
  | ' ';

// 인풋 플레이스홀더 타입
type InputPlaceholderType =
  | '이름을 입력하세요'
  | '`-` 를 제외하고 입력하세요'
  | '상세 주소를 입력하세요'
  | '특이사항이 있을 시 기입하세요.'
  | '할인율을 입력하세요'
  | '할인 금액 출력'
  | '수량'
  | '분류 불가능한 세척품목'
  | '연도 입력'
  | '제품명 직접입력';
// 인풋 프롭 타입지정
export type InputProps = {
  inputID?: string;
  labelProp?: LabelType;
  placeholderProp?: InputPlaceholderType;
  handleInput?: ComponentProps<'input'>['onChange'];
  modifyInput?: () => void;
  minValue?: number;
  maxValue?: number;
  adornment?: '원' | '%' | '';
  type?: 'number' | 'text';
  color?: object;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  isModifiable?: boolean;
  helperText?: HelperTextType;
  variableValue?: number | string;
  containerWidth?: string;
};

// 현재 날짜 초기화
export const TODAY = dayjs();
export const CURRENT_YEAR = TODAY.year();
export const CURRENT_MONTH = TODAY.month() + 1; // dayjs에서 month()는 0-11을 반환
export const CURRENT_DAY = TODAY.date();

/**
 * 클라이언트 기준 현재날짜 상수
 */
export const MIN_DATE = dayjs(`${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DAY}`);

export type DatePickerProps = {
  label?: '일정 선택';
  value?: Dayjs | null;
  handleChange?: (date: Dayjs | null) => void; //스케쥴에 필요해서 매개변수 입력
};

//schedule에 표시할 사용자 정보
export type CustomerInfo = {
  customerName: string;
  customerContact: string;
  customerAddress: string;
  customerComments?: string;
  cleaningItem: string;
  cleaningType: string;
  itemQuantity: number;
  totalPrice: number;
  appointmentDate: string;
  appointmentTime: string;
  assignedEngineer: string;
};

export type CustomerInfoProps = {
  customer?: CustomerInfo;
};

export const workTimeLine: ProductDropdownList[] = [
  { label: '8시 이전' },
  { label: '8시 ~ 9시' },
  { label: '9시 ~ 10시' },
  { label: '10시 ~ 11시' },
  { label: '11시 ~ 12시' },
  { label: '12시 ~ 13시' },
  { label: '13시 ~ 14시' },
  { label: '14시 ~ 15시' },
  { label: '15시 ~ 16시' },
  { label: '16시 ~ 17시' },
  { label: '17시 ~ 18시' },
  { label: '18시 ~ 19시' },
  { label: '19시 이후' },
];

export type CustomerTimeSlotProps = {
  timeSlot: string;
  customer?: CustomerInfo;
};

export type CustomerTimeMappingProps = {
  selectDate: string;
  orderInfo?: CustomerInfo[];
};

export type engineerInfo = {
  engineerName: string;
  engineerContact: string;
  engineerAddress: string;
  engineerAbleItem: string;
  engineerSignificant: string;
  engineerClosedDay: string;
  engineerClosedDate: string;
  engineerSalary: number;
  engineerWorkDay: string;
};

/**
 * 주문정보 입력값 state 관리를 위한 타입
 */
export type OrderInfoModel = {
  orderDate: string;
  customerName: string;
  customerPhoneNum: string;
  customerAddr: string;
  customerComments: string;
  customerPayment: string;
  customerReciept: string;
  checkReciept: boolean;
};

/**
 * 매출정보 입력값 state 관리를 위한 타입
 */
export type SalesInfoModel = {
  item: string;
  writtenItem?: string;
  itemQuantity: number;
  isComposite: boolean;
  isRegular: boolean;
  isDiscounted: boolean;
  isModifiable: boolean;
  discountRatio: string;
  totalPrice: number;
  comments?: string;
};

export type InfoTableProp = {
  tableRowText: OrderInfoTableRowTextType;
  component: JSX.Element;
  subComponent?: JSX.Element;
};

export type OrderInfoTableRowTextType =
  | '예약일시'
  | '고객성함'
  | '연락처'
  | '방문주소'
  | '특이사항'
  | '결제방식'
  | '증빙서류'
  | '발행완료';

export const orderTableTexts: ProductDropdownList[] = [
  { label: '예약일시' },
  { label: '고객성함' },
  { label: '연락처' },
  { label: '방문주소' },
  { label: '특이사항' },
  { label: '결제방식' },
  { label: '증빙서류' },
  { label: '발행완료' },
];

export type SalesInfoTableRowTextType =
  | '세척품목'
  | '세척대수'
  | '세척방식'
  | '할인여부'
  | '세척금액'
  | '특이사항';

export const salesTableTexts: ProductDropdownList[] = [
  { label: '세척품목' },
  { label: '세척대수' },
  { label: '세척방식' },
  { label: '할인여부' },
  { label: '세척금액' },
  { label: '특이사항' },
];

//버튼 모달의 제목으로 들어가는 타입정의
export type ButtoModalTextType =
  | '해당 내용으로 기사정보를 등록하시겠습니까?'
  | '해당 내용으로 급여사항을 등록하겠습니까?';

//C모달에 들어가는 프롭스정의
export type modalProps = {
  open: boolean;
  title: ButtoModalTextType;
  children: JSX.Element;
};

//버튼TWo에 들어가는 프롭스정의
export type ButtonTwoModalProps = {
  leftButton: ButtonContent;
  rightButton: ButtonContent;
  leftColor?: string;
  rightColor?: string;
  leftBgColor?: string;
  rightBgBolor?: string;
  onLeftButton?: () => void;
  onRightButton?: () => void;
  modalText?: ButtoModalTextType;
};

// engineer컴포넌트 상태들을 객체로 관리
export type EngineerInfoModel = {
  name: string;
  number: string;
  address: string;
  addskill: string;
  issue: string;
};

//engineer컴포넌트의 테이블 타입정의
export type EngineerTableType = '기사성함' | '연락처' | '거주지역' | '가능품목' | '특이사항';

//engineer컴포넌트의 테이블의 함수정의
export const engineerCreateData = (
  row: EngineerTableType, //
  first: JSX.Element, //
  second?: JSX.Element,
  thrid?: string
) => {
  return { row, first, second, thrid };
};

//LeftInfoComponent컴포넌트의 테이블의 행의 타입 정의 및 사용
export type leftinfo = '연락처' | '거주지' | '가능품목' | '특이사항';
export const leftinfo: leftinfo[] = ['연락처', '거주지', '가능품목', '특이사항'];

//RightInfoComponent컴포넌트의 상태들을 객체로 관리
export type rightModel = {
  regularDay: string;
  irregularDay: string;
  regularCheckBox: boolean;
  irregularCheckBox: boolean;
};

//Salary컴포넌트의 테이블행의 타입을 정의
export type SalaryType = '기사성함' | '수당률' | '급여요일';

//Salary컴포넌트의 테이블의 함수정의
export const SalaryCreateData = (rows: SalaryType, first: JSX.Element) => {
  return { rows, first };
};

// 엔지니어 인포페이지 급여사항상세 페이지 정의(왼쪽)
export const LeftInfoData = (row: string[], first: string[]) => {
  return { row, first };
};

// 엔지니어 인포페이지 급여사항상세 페이지 정의(오른쪽)
export const RightInfoData = (row: RightInfoType['row'][], first: string[]) => {
  return { row, first };
};

// 엔지니어 인포페이지 급여사항상세 페이지 정의(오른쪽)
export type RightInfoType = {
  row: '합계수당' | '수당률' | '수당금액' | '지급요일' | '지급여부';
};
