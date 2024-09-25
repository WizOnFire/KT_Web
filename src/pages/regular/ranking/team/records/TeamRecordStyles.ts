import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const TeamRankingTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
`;



export const TeamRankingHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    border-top: 2px solid ${colors.redQuaternary};
    background-color: ${colors.mediumIvory};
    color: ${colors.darkGray};
    font-weight: 500;
    &:nth-child(1) {
        width: 15%;
    }
`;


export const TeamRankingRow = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
    }
    &:hover {
        background-color: ${colors.white};
        color: ${colors.darkGray};
        font-weight: 500;
    }
`;

export const TeamRankingCell = styled.td<{$isKT?:boolean; $isKTColumn?:boolean}>`
    padding-block: 10px;
    text-align: center;
    border: 1px solid ${colors.silverGray};
    color : ${({$isKT,$isKTColumn}) =>( $isKT || $isKTColumn ? colors.redPrimary : "inherit")};
    background-color: ${({$isKT,$isKTColumn}) => ($isKT || $isKTColumn ? 'rgba(255, 153, 153, 0.1)' : "inherit")};
    &:nth-child(1) {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;

//2024시즌팀 기록 , 관중기록
export const TeamRankAudienceCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    border-top: 2px solid ${colors.redQuaternary};
    background-color: ${colors.mediumIvory};
    color: ${colors.darkGray};
    font-weight: 500;
    &:nth-child(1) {
        width: 8%;
    }
    &:nth-child(2) {
        width: 20%;
    }
`;