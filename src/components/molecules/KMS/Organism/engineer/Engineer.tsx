import CCheckbox from '@/components/atom/CCheckbox';
import CInput from '@/components/atom/CInput';
import { skill, skillArr } from '@/constants/definition';

import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { ButtonTwo } from '../../Melecules/engineer/ButtonTwo';

import { ChangeEventHandler, useState } from 'react';
import { CModal } from '../../Melecules/engineer/CModal';

export type EngineerTableType = '기사성함' | '연락처' | '거주지역' | '가능품목' | '특이사항';

const createData = (
  row: EngineerTableType, //
  first: JSX.Element, //
  second?: JSX.Element
) => {
  return { row, first, second };
};

export const SkillCheckBoxs = () => {
  return (
    <>
      {skillArr.map((skill) => (
        <CCheckbox<skill> key={skill} label={skill} isChecked={false} />
      ))}
    </>
  );
};

// 엔지니어 상태 객체로 관리
export type EngineerInfoModel = {
  name: string;
  number: string;
  address: string;
  skills: skill[];
  addskill: string;
  issue: string;
};

// 상태의 기본값을 지정해줌
export const Engineer = () => {
  const [showModal, setModal] = useState(false);
  const [engineerData, setEngineerData] = useState<EngineerInfoModel>({
    name: '',
    number: '',
    address: '',
    skills: [],
    addskill: '',
    issue: '',
  });

  //인풋 상태관리
  const EngineerInfoChangeHandler = (key: keyof EngineerInfoModel, value: string) => {
    setEngineerData((prev) => ({ ...prev, [key]: value }));
    console.log(engineerData);
  };

  //필드와 인풋상태관리 연결
  const handleInputChange =
    (key: keyof EngineerInfoModel): ChangeEventHandler<HTMLInputElement> =>
    (event) => {
      EngineerInfoChangeHandler(key, event.target.value);
    };

  //체크박스 상태관리
  const handleSkillChange = (skill: skill, isChecked: boolean) => {
    setEngineerData((prev) => ({
      ...prev,
      skills: isChecked ? [...prev.skills, skill] : prev.skills.filter((s) => s !== skill),
    }));
  };

  const rows = [
    createData('기사성함', <CInput type="text" handleInput={handleInputChange('name')} />),
    createData('연락처', <CInput type="text" handleInput={handleInputChange('number')} />),
    createData('거주지역', <CInput type="text" handleInput={handleInputChange('address')} />),
    createData(
      '가능품목',
      <SkillCheckBoxs />,
      <CInput type="text" handleInput={handleInputChange('skills')} />
    ),
    createData('특이사항', <CInput type="text" handleInput={handleInputChange('issue')} />),
  ];

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
      <CModal title="해당 내용으로 기사정보를 등록하시겠습니까?" open={showModal}>
        {ButtonTwo({
          leftButton: '아니오',
          leftBgColor: 'gray',
          leftColor: 'black',
          rightButton: '등록',
          onLeftButton: closeModal,
          onRightButton: openInfo,
        })}
      </CModal>
    </div>
  );
};
