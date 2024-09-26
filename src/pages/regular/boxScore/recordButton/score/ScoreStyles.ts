import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const ScoreWrapper = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
    caret-color: transparent;
`
export const ScoreTable = styled.table`
    position: absolute;
    top: 150px;
    left: 25%;
    margin: 0 auto;
    width: 50%;
    font-size: 12px;
    table-layout: fixed;
    color: ${colors.mediumGray};
    caret-color: transparent;
    border-collapse: collapse;
    z-index: 37;
`;

export const ScoreHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    border-top: 1.5px solid ${colors.redQuaternary};
    font-weight: 500;
    color: ${colors.black};
    background-color: ${colors.mediumIvory};
    &:nth-child(1) {
        width: 10%;
    }
`;

export const ScoreRow = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.darkGray};
        font-weight: 500;
    }
`;

export const ScoreCell = styled.td`
    padding-block: 10px;
    text-align: center;
    border: 1px solid ${colors.silverGray};
    &:nth-child(1) {
        border-left: none;
        font-weight: 500;
    }

    &:nth-child(14) {
        color: ${colors.redPrimary};
        font-weight: 500;
    }
    &:last-child {
        border-right: none;
    }
`;

export const ScoreArrowAndInfoBox= styled.div`
    z-index: 40;
    width: 100%;
    position: absolute;
    top: 90px;
`;

export const ScoreArrowBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 7%;
    cursor: pointer;
`;

export const ScoreInfo = styled.div`
    z-index: 38;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    bottom: 20px;
    cursor: default;
    div{
        display: flex;
        gap: 10px;
        span{
            display: flex;
            align-items: center;
            gap: 6px;
        }
    }
`

export const ScoreBoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    z-index: 39;
    position: absolute;
    left: 0;
    width: 100%;
    gap: 55%;
`