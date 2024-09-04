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

export type allType = state | revenue | skill;
