
import 'moment/locale/ko'; // 한국어 로케일 추가
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styled from 'styled-components';
import colors from '../../../assets/Colors';


export const CalendarBox = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto; /* 중앙배치 */
  padding-top: 80px;
  border-bottom: 2px solid #000;
`;


export const StyledCalendarContainer = styled.div`
  height: auto;
  overflow: visible;

    .rbc-toolbar {
        display: none;
    }

    .rbc-header {
        display: none; //요일 숨기기
    }

    .rbc-off-range {
        visibility: hidden; /* 다음 달 일이 보이지 않도록 설정 */
    }

    .rbc-off-range-bg {
            background: ${colors.white}
        }

    .rbc-month-row {
        display:flex;
        min-height: 190px; /* 각 date cell의 최소 높이 설정 */
        max-height: 200px;
        //overflow: scroll; /* 스크롤 가능하도록 설정 */
    }

    .rbc-day-bg {
        min-height: 100px; /* 각 date cell의 최소 높이 설정 */
        max-height: 200px; /* 최대 높이 설정 */
        overflow: hidden;
        position:relative;
    }


    .rbc-date-cell {
        flex: 1 1 50%; 
        min-width: 0;
        padding-left: 5px;
        text-align: left;
        z-index: 1;
        display: block; 
        height:100%;
        min-height:20px;
        // > a {
        //     &,
        //     &:active,
        //     &:visited {
        //     color: inherit;
        //     text-decoration: none;
        //     }
        // }
    }

    .rbc-today {
    background-color: transparent !important; 
    }

     /* 이벤트 배경 스타일 제거 */
    .rbc-event {
      background-color: transparent !important; 
    }
      
    /* date 글씨 */
    .rbc-button-link {
        font-size: 14px;
        margin-top: 7px;
        pointer-events: none; // 날짜 셀의 클릭 기능 비활성화
        padding:0px;


}

`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 15px; 
  border-bottom: 2px solid #000;

  div{
      display: flex;
      border: none;
      cursor: pointer;
      font-size: 14px;
  }
`;

export const MonthSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 20px;
  color: black;
  span{
    margin: 20px;
    font-size:25px;
  }
`;

export const WeekdayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  font-size: 18px;

  span {
    flex: 1;
    text-align: center;
  }
`;

