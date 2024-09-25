import styled from "styled-components";
import lineupback from "../../../assets/images/watchpoint/lineup.png";
import colors from "../../../assets/Colors";

    export const PlayerPosition = styled.div<{ top: string; left: string }>`
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    transform: translate(-50%, -50%);
    text-align: center;
    `;

    export const FieldWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 20px;
    `;

    export const TeamWrapper = styled.div`
    background-image: url(${lineupback}); 
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center; // 수평 중앙 정렬
    justify-content: center; // 수직 중앙 정렬
    margin: 0 20px;
    width: 400px; // 크기 조정
    height: 450px; // 크기 조정
    margin-top:-60px;
  `;

  export const LineUpBox = styled.div`
    display:flex;
    height: 100%;
    flex-direction: column; // 추가: 수직 배열
    align-items: center; // 수평 중앙 정렬
    justify-content: center; // 수직 중앙 정렬

  `

    export const TeamLogo = styled.img`
    width: 80px;
    height: 80px;
    `;

    export const VSWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

    export const VS = styled.img`
  
    `;

    export const PlayerInfo = styled.div`
    background: #fff;
    border-left : 5px solid ${colors.redQuaternary};
    width: 80px;
    height: 30px;
    border-radius: 5px;
    font-size: 11px;
    display: flex; // 추가: flexbox 사용
    justify-content: center; // 추가: 수평 중앙 정렬
    align-items: center; // 추가: 수직 중앙 정렬
    `;