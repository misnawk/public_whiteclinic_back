'use client';

import CCheckbox from '@/components/atom/CCheckbox';
import { engineerName } from '@/constants/definition';
import { Box } from '@mui/material';
import { useState } from 'react';

const PersonName = [
  '김지훈',
  '이서연',
  '박민준',
  '정소율',
  '최예준',
  '강다은',
  '조현우',
  '윤지민',
  '송태윤',
  '임서현',
  '황준서',
  '신지원',
  '오동현',
  '한예린',
  '구민재',
  '남효주',
  '백승현',
  '문혜진',
  '양도윤',
  '노은서',
  '류태호',
  '곽민서',
  '권지유',
];

export const CheckboxList = () => {
  const [nameList, setNameList] = useState<boolean[]>(Array(PersonName.length).fill(false));
  const isAnyChecked = nameList.some((isCheckd) => isCheckd);

  //체크박스 상태관리 함수
  const toggle = (index: number) => {
    setNameList((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      console.log(prev, index);
      return newState;
    });
  };

  //이름 리스트 뿌려주기
  const EngineerNames = () => {
    return PersonName.map((name, index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <CCheckbox<engineerName>
          key={index}
          label={name}
          isChecked={nameList[index]}
          width="100px"
          handleChange={() => toggle(index)}
          isAnyChecked={isAnyChecked ? !nameList[index] : false}
        />
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        borderRadius: '10px',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: 'darkgray lightgray',
      }}
    >
      <EngineerNames />
    </Box>
  );
};
