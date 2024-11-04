import styled from "styled-components"
import colors from "../../../assets/Colors"
import { landingBackground02 } from "../../../assets/assets";

export const TeamMatchContainer = styled.section`
    background-image: url(${landingBackground02});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.white};
`;

export const TeamMathNews = styled.div`
    width: 65%;
    font-size: 14px;
    color: ${colors.white};
    text-align: center; 
`;

export const TeamMathTitle = styled.span`
    font-family: PartialSansKR;
    font-size : 60px;
`

export const TeamMatchLine = styled.div`
    width: 100%;
    border-bottom: 5px solid ${colors.white};
    display: flex;
    margin: 30px 0 70px 0;
    caret-color: transparent;
`

export const TeamMatchArrowBox = styled.div`
    display: flex;
    gap: 75vh;
    
`;

export const TeamMatchArrow = styled.img`

    width: 40px;
    height: 40px;
    cursor: pointer;
    box-sizing: border-box;
    &:hover{
        box-shadow: 4px 4px 7px rgba(255, 255, 255, 0.7); /* 섀도우 값은 조정 가능 */
        border-radius:50%;
        padding:8px;
    }
    
`;

export const MatchInfo = styled.div`
    z-index: 26;
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 50px;
    text-align: center;
    gap: 10px;
    span {
        color: ${colors.ashGray};
        &:first-child{
            /* font-family: KBO_Gothic_bold; */
            font-size: 22px;
            color: ${colors.white};
        }
    }
`
export const ScoreContainer = styled.div`
    display: flex;
    gap: 100px;
    margin-bottom: 50PX;

    strong{
        font-size: 60px;
        display: flex;
        align-items: center;
        margin-top: 40px;
    }
`
