import styled from "styled-components"
import colors from "../../assets/Colors"

type LeftProps = {
    left?: string;
    transform?: string;
}

export const EachTeamBox = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    margin-top: 70px;
    border: 1px solid ${colors.ashGray};
    border-radius: 15px;
    caret-color: transparent;
    align-content: center;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

    }

    img{
        width: 150px; 
        height: auto; 
        margin-top: 10px;
    }
`

export const HiddenBlackBox = styled.div<LeftProps>`
    position : absolute;
    z-index: 24;
    width: 30px;
    height: 130px;
    top: 27%;
    left: ${(props) => props.left || '-5%'};
    background-color: black;
    /* border: 1px solid white; */
`

export const ScoreBold = styled.span<LeftProps>`
    position : absolute;
    z-index: 25;
    font-size: 90px;
    font-family: KBO_Gothic_bold;
    top: 27%;
    left: ${(props) => props.left || 0 };
    transform: ${(props) => props.transform || "translateX(-70%)" };
`
