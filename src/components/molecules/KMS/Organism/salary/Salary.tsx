import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { AllowanceRates, SalaryCreateData, WeekDays } from '@/constants/definition';
import { Box, Table, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';
import { CModal } from '../../Melecules/engineer/CModal';
import { useState } from 'react';

export const Salary = () => {
  const [Modal, setModal] = useState(false);

  type SalaryModel = {
    name: string;
    rate: string;
    payday: string;
  };
  const [SalaryData, setSalaryData] = useState<SalaryModel>({
    name: '',
    rate: '',
    payday: '',
  });

  const SalaryHandleChange = (key: keyof SalaryModel, value: string) => {
    setSalaryData((prev) => ({ ...prev, [key]: value }));
    console.log(SalaryData);
  };

  const rows = [
    SalaryCreateData(
      '기사성함',
      CInput({
        type: 'text',
        labelProp: '기사 성함',
        placeholderProp: '이름을 입력하세요',
        handleInput: (e) => SalaryHandleChange('name', e.target.value),
      })
    ),
    SalaryCreateData(
      '수당률',
      CDropDown({
        contentList: AllowanceRates,
        handleChange: (e) => SalaryHandleChange('payday', e.target.value),
      })
    ),
    SalaryCreateData(
      '급여요일',
      CDropDown({
        contentList: WeekDays,
        handleChange: (e) => {
          SalaryHandleChange('rate', e.target.value);
        },
      })
    ),
  ];

  return (
    <Box>
      <TableContainer sx={{ width: '430px' }}>
        <Table>
          {rows.map((row) => (
            <TableRow key={row.rows}>
              <TableCell
                sx={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  letterSpacing: 5,
                  backgroundColor: '#f5f5f5',
                  width: '100px',
                  textAlign: 'center',
                  border: 'none',
                }}
              >
                {row.rows}
              </TableCell>
              <TableCell>{row.first}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
      <ButtonTwo
        leftButton="취소"
        onLeftButton={() => setModal(false)}
        rightButton="등록"
        onRightButton={() => setModal(true)}
      />
      <CModal title="해당 내용으로 급여사항을 등록하겠습니까?" open={Modal}>
        {ButtonTwo({
          leftButton: '아니오',
          onLeftButton: () => setModal(false),
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
        })}
      </CModal>
    </Box>
  );
};
