import styled from "styled-components";
import colors from "../../../assets/Colors";
import { select } from "../../../assets/assets";

export const SelectBoxRank = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    span{
        flex: 1;
        text-align: end;
    }
`;

export const SelectBoxPitRank = styled.select`
    width: 100px;
    height: 25px;
    border-radius: 8px; 
    padding-left: 10px;
    appearance: none;
    background-image: url(${select});
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 10px;
    cursor: pointer;
    border: 1px solid ${colors.ashGray};
`
