import 'moment/locale/ko'; // 한국어 로케일 추가
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled,{keyframes} from 'styled-components';
import colors from "../../../../assets/Colors";
import { GrNext, GrPrevious } from 'react-icons/gr';
import moment from 'moment';

import { CalendarHeader,CalendarBox, MonthSelector } from '../../../../pages/regular/schedule/GameCalendarStyles';
import { Outcome } from '../../../../pages/regular/schedule/KtEvent';

moment.locale('ko');

const shimmer = keyframes`
    100% {
        background-position: -100% 0;
    }
`;

const SkeletonStyle = styled.div`
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 0.8s infinite;
  border-radius: 4px;
`;

// // Container Box for Calendar Skeleton
// const SkeletonCalendarBox = styled.div`
//   padding: 16px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   width: 100%;
// `;

// // Skeleton for Month Selector
// const SkeletonMonthSelector = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 10px 0;
// `;

const SkeletonButton = styled.div`
  ${SkeletonStyle};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

`;

// Skeleton for Weekday Headers
const SkeletonWeekdayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    ${SkeletonStyle};
    height: 25px;
    width: 40px;
    margin: 5px;
    border-radius: 4px;
  }
`;

// Skeleton for Calendar Cells
const SkeletonCalendarCell = styled.div`
  ${SkeletonStyle};
  width: 100%;
  height: 100px;
  margin: 5px 0;
`;

const SkeletonCalendarContainer = styled.div`
 ${SkeletonStyle}
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
`;

const GameCalendarSkeleton = () => {
    //const [currentDate, setCurrentDate] = useState(new Date()); // 현재 날짜 
 
    return (
    <>
      <CalendarBox>
        <CalendarHeader>
        <MonthSelector >
            <SkeletonButton>
              <GrPrevious size={25} />
            </SkeletonButton>
            <SkeletonStyle style={{ width: '100px', height: '25px' }} />
            <SkeletonButton>
              <GrNext size={25} />
            </SkeletonButton>
        </MonthSelector>
         <div style={{display:'flex'}}>
          <Outcome outcome='승'>승</Outcome>
          <Outcome outcome='패'>패</Outcome>
          <Outcome outcome='무'>무</Outcome>
          {/* <Outcome outcome='취'>취</Outcome> */}
        </div> 
        </CalendarHeader>

        <SkeletonWeekdayHeader>
          <span style={{ color: colors.redPrimary }}>일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
        </SkeletonWeekdayHeader>

        <SkeletonCalendarContainer>
          {Array.from({ length: 35 }).map((_, idx) => (
            <SkeletonCalendarCell key={idx} />
          ))}
        </SkeletonCalendarContainer>
      </CalendarBox>
    </>
  );
};

export default GameCalendarSkeleton;
