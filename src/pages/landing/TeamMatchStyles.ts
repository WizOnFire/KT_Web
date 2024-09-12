import styled from "styled-components"
import colors from "../../assets/Colors"
import { landingBackground02 } from "../../assets/assets";

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
    gap: 62vh;
`;

export const TeamMatchArrow = styled.img`
    width: 40px;
    height: auto;
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
    gap: 150px;
    margin-bottom: 50PX;
`
