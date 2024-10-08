import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { engineerCreateData, EngineerInfoModel, skillArr } from '@/constants/definition';

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { useState } from 'react';

// 상태의 기본값을 지정해줌
export const Engineer = () => {
  const [showModal, setModal] = useState(false);
  const [checkBoxState, setCheckBoxState] = useState<boolean[]>(Array(12).fill(false));
  const [engineerData, setEngineerData] = useState<EngineerInfoModel>({
    name: '',
    number: '',
    address: '',
    addskill: '',
    issue: '',
  });

  //인풋 상태관리
  const EngineerInfoChangeHandler = (key: keyof EngineerInfoModel, value: string) => {
    setEngineerData((prev) => ({ ...prev, [key]: value }));
    console.log(engineerData);
  };

  //체크박스 상태관리 함수
  const toggle = (index: number) => {
    setCheckBoxState((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      console.log(prev, index);
      return newState;
    });
  };

  //체크박스 뿌려주기
  const SkillCheckBoxs = () => {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 2,
          maxWidth: '600px',
        }}
      >
        {skillArr.map((skill, index) => (
          <CCheckbox
            key={index}
            label={skill}
            isChecked={checkBoxState[index]}
            handleChange={() => toggle(index)}
          />
        ))}
      </Box>
    );
  };

  const rows = [
    engineerCreateData(
      '기사성함',
      CInput({
        labelProp: '기사 성함',
        type: 'text',
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('name', e.target.value);
        },
      })
    ),
    engineerCreateData(
      '연락처',
      CInput({
        labelProp: '기사 연락처',
        type: 'text',
        placeholderProp: '`-` 를 제외하고 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('number', e.target.value);
        },
      })
    ),
    engineerCreateData(
      '거주지역',
      CInput({
        labelProp: '기사 주소지',
        type: 'text',
        placeholderProp: '상세 주소를 입력하세요',
        handleInput: (e) => {
          EngineerInfoChangeHandler('address', e.target.value);
        },
      })
    ),
    engineerCreateData(
      '가능품목',
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <SkillCheckBoxs />
        ||
        <Box>
          {CInput({
            labelProp: '제품명 직접입력',
            type: 'text',
            placeholderProp: '제품명 직접입력',
            handleInput: (e) => EngineerInfoChangeHandler('addskill', e.target.value),
          })}
        </Box>
      </Box>
    ),
    engineerCreateData(
      '특이사항',
      CInput({
        labelProp: '특이사항',
        type: 'text',
        placeholderProp: '특이사항이 있을 시 기입하세요.',
        handleInput: (e) => EngineerInfoChangeHandler('issue', e.target.value),
      })
    ),
  ];

  const openInfo = () => {
    window.location.href = '/engineer/e_register';
  };

  return (
    <Box sx={{ margin: '24px' }}>
      <TableContainer component={Paper} sx={{ borderRadius: '8px', scrollbarWidth: 'thin' }}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.row}>
                <TableCell
                  sx={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    letterSpacing: 5,
                    backgroundColor: '#f5f5f5',
                    width: '120px',
                    textAlign: 'center',
                  }}
                >
                  {row.row}
                </TableCell>

                <TableCell>
                  <Box>{row.first}</Box>
                  <Box>{row.second}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonTwo
        leftButton="취소"
        leftColor="black"
        leftBgColor="gray"
        rightButton="등록"
        onRightButton={() => setModal(true)}
      />
      <CModal title="해당 내용으로 기사정보를 등록하시겠습니까?" open={showModal}>
        {ButtonTwo({
          leftButton: '아니오',
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
          onLeftButton: () => setModal(false),
          onRightButton: openInfo,
        })}
      </CModal>
    </Box>
  );
};
