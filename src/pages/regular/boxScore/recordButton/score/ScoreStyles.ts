import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const ScoreWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin: 0 auto;
    display: flex;
    position: relative;
    margin-bottom: 50px;
    caret-color: transparent;
`
export const ScoreTable = styled.table`
    width: 32%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
    margin: 0 auto;
    z-index: 37;
    position: absolute;
    top: 650px;
    left: 34%;
`;

export const ScoreHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    border-top: 1.5px solid ${colors.redQuaternary};
    background-color: ${colors.mediumIvory};
    color: ${colors.black};
    font-weight: 500;
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