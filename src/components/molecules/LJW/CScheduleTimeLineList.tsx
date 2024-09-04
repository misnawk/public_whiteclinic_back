import { Dayjs } from 'dayjs';
import CScheduleTimeLine from './CScheduleTimeLine';
import { engineerInfo, TODAY } from '@/constants/definition';

type CScheduleTimeLineListProps = {
  selectDate?: Dayjs | null;
  engineers?: engineerInfo[];
  //engineers: string[]; //나중에 기사정보 페이지 완성되면 기사 type 가져와서 넣기
};

const CScheduleTimeLineList = ({ selectDate = TODAY, engineers }: CScheduleTimeLineListProps) => {
  if (!engineers) {
    return <div></div>;
  }

  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  return (
    <div>
      {engineers.map((item, i) => (
        <CScheduleTimeLine key={i} engineerName={item.engineerName} selectDate={formattedDate} />
      ))}
    </div>
  );
};

export default CScheduleTimeLineList;
