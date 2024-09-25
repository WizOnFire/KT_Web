import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const PitRankingTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
`;

export const PitRankingHeaderCell   = styled.td<{issorted?: boolean}>`
    padding-block: 10px;
    text-align: center;
    border-top: 1.5px solid ${colors.redQuaternary};
    background-color: ${({issorted}) => issorted ? `rgba(255, 0, 0, 0.1)` : colors.mediumIvory };
    color: ${({issorted}) => issorted ? colors.redQuaternary : colors.black };
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

export const PitRankingRow = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.darkGray};
        font-weight: 500;
    } 
`;

export const PitRankingCell = styled.td<{isKT?:boolean, isKTColumn?:boolean}>`
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

export const SelectAndSearch = styled.div`
    display: flex;
    gap: 5px;
    span{
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }
`