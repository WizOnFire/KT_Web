import styled from "styled-components";
import colors from "../../../assets/Colors";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    margin-left: auto; // 수평 가운데 정렬
    margin-right: auto;
    margin-top: -50px;

`;

export const WatchPointWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const WatchPointHeader= styled.div`
    z-index: 40;
    width: 100%;
    position: absolute;
`;

export const TeamInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${colors.silverGray};
    margin-top: 200px;
    width: 200px;
    height: 200px;
    span {
        margin-bottom: 10px;
        font-size: 14px;
        color: ${colors.darkGray};
    }
`;
export const TeamInfoWrapper = styled.div`
    display: flex;
    z-index: 39;
    width: 100%;
    gap: 65%;
    justify-content: center;
`

export const LogoBox = styled.img`
    width: 130px; 
    height: 130px;
`;

export const TableBox = styled.table`
    width: 680px;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
    margin: 0 auto;
    z-index: 37;
    position: absolute;
    top: 650px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    
`;

export const PitchTable = styled.div`
    width: 100%;
    max-width: 1100px;
    margin-left: auto; // 수평 가운데 정렬
    margin-right: auto;
    margin-top:100px;
`

export const LineUpWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px solid ${colors.redQuaternary};
    gap:80px;
`
export const LineUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    margin-left: auto; // 수평 가운데 정렬
    margin-right: auto;
`
