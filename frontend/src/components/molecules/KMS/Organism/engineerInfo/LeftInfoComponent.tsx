import CButton from '@/components/atom/CButton';
import CInput from '@/components/atom/CInput';
import { leftinfo } from '@/constants/definition';
import { Box } from '@mui/material';
import { useState } from 'react';

export const LeftInfoComponent = () => {
  //배열로 상태를 담아줄 그릇생성
  const [inputState, setInputState] = useState<string[]>(Array(4).fill(''));

  //인풋 상태관리 함수 매개변수로 index, value값 받음
  const LeftInputStateChangeHandler = (index: number, value: string) => {
    setInputState((prev) => {
      const newState = [...prev];
      newState[index] = value;

      console.log(inputState);
      return newState;
    });
  };

  return (
    <Box id="leftInfo" sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {leftinfo.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '30px',
            width: '550px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '380px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 5,
                width: '120px',
                textAlign: 'center',
              }}
            >
              {item}
            </Box>
            <CInput
              containerWidth="300px"
              isReadOnly
              key={index}
              handleInput={(e) => {
                LeftInputStateChangeHandler(index, e.target.value);
              }}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
