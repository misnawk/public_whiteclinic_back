export type productInfoTable = {
  airconditional: {
    label: string;
    regularPrice?: number;
    compositePrice?: number;
    minPrice?: number;
    maxPrice?: number;
  }[];
  washing: {
    label: string;
    defaultPrice?: number;
    smallPrice?: number;
    mediumPrice?: number;
    largePrice?: number;
    builtInPrice?: number;
    extraWeight?: number;
  }[];
};

export const cleaningItemInfo: productInfoTable = {
  airconditional: [
    { label: '벽걸이', compositePrice: 90000, regularPrice: 50000 },
    { label: '원웨이', compositePrice: 100000, regularPrice: 50000 },
    { label: '포웨이', compositePrice: 130000, regularPrice: 70000 },
    { label: '스탠드', minPrice: 120000, maxPrice: 160000 },
    { label: '투인원', minPrice: 180000, maxPrice: 230000 },
    { label: '원형 360 에어컨', compositePrice: 180000 },
    { label: '파세코 창문형 에어컨', compositePrice: 170000 },
    { label: '사각 덕트', compositePrice: 20000 },
    { label: '원형 덕트', compositePrice: 15000 },
    { label: '메인 덕트', compositePrice: 300000 },
    { label: '일반실외기', compositePrice: 30000 },
    { label: '대형실외기', compositePrice: 50000 },
  ],
  washing: [
    {
      label: '통돌이',
      smallPrice: 90000,
      mediumPrice: 100000,
      largePrice: 110000,
    },
    {
      label: '드럼',
      smallPrice: 120000,
      mediumPrice: 1400000,
      largePrice: 160000,
      builtInPrice: 140000,
    },
    {
      label: '건조기',
      defaultPrice: 250000,
    },
    {
      label: '트윈워시',
      defaultPrice: 250000,
    },
    {
      label: '드럼형 아기사랑 세탁기',
      defaultPrice: 70000,
    },
    {
      label: '통돌이형 아기사랑 세탁기',
      defaultPrice: 100000,
    },
  ],
};
