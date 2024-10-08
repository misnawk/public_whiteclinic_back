import { Dayjs } from 'dayjs';
import CScheduleTimeLine from './CScheduleTimeLine';
import { CustomerInfo, engineerInfo, TODAY } from '@/constants/definition';

type CScheduleTimeLineListProps = {
  selectDate?: Dayjs | null;
  engineers?: engineerInfo[];
  orderInfo?: CustomerInfo[];
};

const CScheduleTimeLineList = ({
  selectDate = TODAY,
  engineers,
  orderInfo,
}: CScheduleTimeLineListProps) => {
  if (!engineers) {
    return <div></div>;
  }

  const formattedDate = selectDate ? selectDate.format('YYYY-MM-DD') : '';
  console.log('timeLineLIstData:', formattedDate, engineers, orderInfo);
  return (
    <div>
      {engineers.map((engineer, i) => {
        const filteredOrderInfo = orderInfo?.filter(
          (order) =>
            order.assignedEngineer === engineer.engineerName &&
            order.appointmentDate === formattedDate
        );

        // console.log('엔지티어 이름과 예약 정보:', engineer.engineerName, filteredOrderInfo);

        return (
          <CScheduleTimeLine
            key={i}
            engineerName={engineer.engineerName}
            selectDate={formattedDate}
            orderInfo={filteredOrderInfo}
          />
        );
      })}
    </div>
  );
};

export default CScheduleTimeLineList;
