import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { skill, skillArr } from '@/constants/definition';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';

import { useState } from 'react';
import { ButtonModal } from '../../Melecules/engineer/ButtonModal';

export type EngineerTableType = '기사성함' | '연락처' | '거주지역' | '가능품목' | '특이사항';

const createData = (
  row: EngineerTableType, //
  first: JSX.Element, //
  second?: JSX.Element
) => {
  return { row, first, second };
};

export const SkillCheckBoxs = () => (
  <>
    {skillArr.map((skill) => (
      <CCheckbox<skill> key={skill} label={skill} isChecked={false} />
    ))}
  </>
);

const rows = [
  createData('기사성함', CInput({ type: 'text' })),
  createData('연락처', CInput({ type: 'text' })),
  createData('거주지역', CInput({ type: 'text' })),
  createData('가능품목', <SkillCheckBoxs />, CInput({ type: 'text' })),
  createData('특이사항', CInput({ type: 'text' })),
];

export const Engineer = () => {
  const [showModal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const openInfo = () => {
    window.location.href = '/engineer/e_registration';
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.row}>
                <TableCell
                  sx={{
                    width: '100px',
                  }}
                >
                  {row.row}
                </TableCell>
                <TableCell
                  sx={
                    {
                      //
                    }
                  }
                >
                  {row.first}
                  {row.second}
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
        onRightButton={openModal}
      />
      {showModal && (
        <ButtonModal
          leftButton="아니오"
          onLeftButton={closeModal}
          rightButton="등록"
          onRightButton={openInfo}
          leftColor="black"
          leftBgColor="gray"
          modalText="해당 내용으로 기사정보를 등록하시겠습니까?"
        />
      )}
    </div>
  );
};
