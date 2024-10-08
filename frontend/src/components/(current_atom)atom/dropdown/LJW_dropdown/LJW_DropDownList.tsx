export type DropDownListProps = {
  label: string;
};

export type DropDownObjectListProps = {
  airconditional: {
    label: string;
    price: number;
    isRegular: boolean;
  }[];
  washing: {
    label: string;
    price: number;
    minWeight: number;
    maxWeight: number;
    isRegular: boolean;
  }[];
};
// 세척품목;
export const CleaningItem: DropDownListProps[] = [
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
  { label: '빌트인' },
  { label: '건조기' },
  { label: '드럼형 아기사랑 세탁기' },
  { label: '통돌이형 아기사랑 세탁기' },
];

export const cleaningItemObject: DropDownObjectListProps = {
  airconditional: [
    { label: '벽걸이', price: 90000, isRegular: false },
    { label: '원웨이', price: 100000, isRegular: false },
  ],
  washing: [
    {
      label: '통돌이',
      price: 90000,
      minWeight: 7,
      maxWeight: 17,
      isRegular: true,
    },
  ],
};

//결제방식
export const PaymentMethods: DropDownListProps[] = [
  { label: '계좌이체' },
  { label: '카드결제' },
  { label: '숨고페이' },
  { label: '현장현금결제' },
];

//증빙서류
export const Documents: DropDownListProps[] = [
  { label: '간이영수증' },
  { label: '세금계산서' },
  { label: '현금영수증' },
  { label: '카드영수증' },
  { label: '필요없음' },
];

//수당률
export const AllowanceRates: DropDownListProps[] = Array.from({ length: 7 }, (_, index) => ({
  label: `${50 + index * 5}%`,
}));

//급여요일
export const WeekDays: DropDownListProps[] = [
  { label: '월요일' },
  { label: '화요일' },
  { label: '수요일' },
  { label: '목요일' },
  { label: '금요일' },
  { label: '토요일' },
  { label: '일요일' },
];
