import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const BattRankingTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
`;

export const BattRankingHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    background-color: ${colors.redGradient};
    color: ${colors.white};
    font-weight: 500;
    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 8%;
    }
    &:nth-child(3) {
        width: 8%;
    }
    &:nth-child(4) {
        width: 8%;
    }
`;

export const BattRankingRow = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.darkGray};
        font-weight: 500;
    } 
`;

export const BattRankingCell = styled.td<{isKT?:boolean, isKTColumn?:boolean}>`
    padding-block: 10px;
    text-align: center;
    border: 1px solid ${colors.silverGray};
    color : ${({isKT,isKTColumn}) =>( isKT || isKTColumn ? colors.redPrimary : "inherit")};
    background-color: ${({isKT,isKTColumn}) => (isKT || isKTColumn ? 'rgba(255, 153, 153, 0.1)' : "inherit")};
    &:nth-child(1) {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;
