import CDropDown from '@/components/atom/CDropdown';
import CInput from '@/components/atom/CInput';
import { AllowanceRates, WeekDays } from '@/constants/definition';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';

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
      <ButtonTwo leftButton="취소" rightButton="등록" />
    </div>
  );
};
