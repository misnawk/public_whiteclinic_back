import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { AllowanceRates, WeekDays } from '@/constants/definition';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { useState } from 'react';

type SalaryType = '기사성함' | '수당률' | '급여요일';

const createData = (rows: SalaryType, first: JSX.Element) => {
  return { rows, first };
};

const rows = [
  createData('기사성함', CInput({ type: 'text' })),
  createData('수당률', CDropDown({ contentList: AllowanceRates })),
  createData('급여요일', CDropDown({ contentList: WeekDays })),
];

export const Salary = () => {
  const [Modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.rows}>
                <TableCell
                  sx={{
                    width: '100px',
                  }}
                >
                  {row.rows}
                </TableCell>
                <TableCell>{row.first}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ButtonTwo
        leftButton="취소"
        onLeftButton={closeModal}
        rightButton="등록"
        onRightButton={openModal}
      />
      <CModal title="해당 내용으로 급여사항을 등록하겠습니까?" open={Modal}>
        {ButtonTwo({
          leftButton: '아니오',
          onLeftButton: closeModal,
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
        })}
      </CModal>
    </div>
  );
};
