import CScheduleTimeLine from './CScheduleTimeLine';

const meta = {
  title: 'molecules/TimeLine',
  component: CScheduleTimeLine,
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {
    engineerName: '박영식',
    selectDate: '2024.09.05',
    orderInfo: [
      {
        customerName: '김이박',
        customerContact: '010-1111-1111',
        customerAddress: '인천 서구',
        cleaningItem: '통돌이',
        cleaningType: '종합',
        modelEA: 1,
        totalPrice: 300000,
        appointmentDate: '2024.09.05',
        appointmentTime: '9시 ~ 10시',
      },
    ],
  },
};
