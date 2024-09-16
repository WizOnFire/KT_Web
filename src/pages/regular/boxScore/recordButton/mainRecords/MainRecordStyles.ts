import styled from 'styled-components';
import colors from '../../../../../assets/Colors';

export const MainStatsTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    caret-color: transparent;
`;

export const MainStatsCell = styled.td`
    padding-block: 10px;
    padding-inline: 30px 10px;
    border: 1px solid ${colors.silverGray};

    &:nth-child(1) {
        width: 15%;
    }
    &:nth-child(2) {
        width: auto;
        color: ${colors.mediumGray};
    }
    &:hover {
        background-color: ${colors.ivory};
        color: ${colors.black};
    }
`;