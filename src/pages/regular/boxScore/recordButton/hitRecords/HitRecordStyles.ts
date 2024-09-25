
import styled from "styled-components";
import colors from "../../../../../assets/Colors";

export const HitRecordLabel = styled.h3`
    margin-top: 50px;
`;

export const HitRecordTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
    table-layout: fixed;
    font-size: 12px;
    color: ${colors.mediumGray};
`;

export const HitRecordHeaderCell   = styled.td`
    padding-block: 10px;
    text-align: center;
    border-top: 1.5px solid ${colors.redQuaternary};
    background-color: ${colors.mediumIvory};
    color: ${colors.black};
    font-weight: 500;
    &:nth-child(2) {
        width: 10%;
    }
`;

export const HitRecordRow = styled.tr`
    &:last-child {
        border-bottom: 1.5px solid ${colors.silverGray};
        background-color: ${colors.mediumIvory};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.darkGray};
        font-weight: 500;
    }
`;

export const HitRecordCell = styled.td`
    padding-block: 10px;
    text-align: center;
    border: 1px solid ${colors.silverGray};
    &:nth-child(1) {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
`;
